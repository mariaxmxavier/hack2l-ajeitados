import "dotenv/config";
import { InferenceClient } from "@huggingface/inference";
import { DatabaseSync } from "node:sqlite";
import { existsSync } from "node:fs";
import { mkdir, readFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { gerarEmbeddingLocal, listarConversasRecentesRag } from "./rag.js";

const DB_FRAUDE_PADRAO = new URL("../../../data/fraude-rag.sqlite", import.meta.url);
const DATASET_GOLPES_PADRAO = new URL("../../../knowledge/reviewed/datasets/dataset_golpes.csv", import.meta.url);
const TOP_K_PADRAO = 3;
const HF_EMBEDDING_MODEL_PADRAO = "intfloat/multilingual-e5-small";

export async function conectarBancoFraudeRag(dbUrl = DB_FRAUDE_PADRAO) {
  const dbPath = fileURLToPath(dbUrl);
  const jaExistia = existsSync(dbPath);

  await mkdir(dirname(dbPath), { recursive: true });

  const db = new DatabaseSync(dbPath);
  prepararBancoFraude(db);

  return {
    db,
    dbPath,
    criadoAgora: !jaExistia
  };
}

export function prepararBancoFraude(db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS golpes (
      id TEXT PRIMARY KEY,
      mensagem TEXT NOT NULL,
      rotulo TEXT NOT NULL,
      categoria TEXT NOT NULL,
      sinais TEXT NOT NULL,
      tags_json TEXT NOT NULL,
      embedding_json TEXT NOT NULL,
      embedding_model TEXT NOT NULL,
      embedding_provider TEXT NOT NULL,
      criado_em TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      atualizado_em TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_golpes_rotulo
    ON golpes (rotulo);
  `);
}

export async function popularDatasetGolpesSeNecessario(
  db,
  {
    datasetUrl = DATASET_GOLPES_PADRAO,
    model = process.env.HF_EMBEDDING_MODEL ?? HF_EMBEDDING_MODEL_PADRAO
  } = {}
) {
  const total = db.prepare("SELECT COUNT(*) AS total FROM golpes WHERE embedding_model = ?").get(model).total;

  if (total > 0) {
    return {
      inseridos: 0,
      provider: db.prepare("SELECT embedding_provider FROM golpes WHERE embedding_model = ? LIMIT 1")
        .get(model)?.embedding_provider ?? "cache"
    };
  }

  const linhas = parseCsv(await readFile(datasetUrl, "utf8"));
  const registros = linhas.map(normalizarRegistroDataset).filter((registro) => registro.id && registro.mensagem);
  const textos = registros.map((registro) => textoParaEmbedding(registro.mensagem));
  const { embeddings, provider } = await gerarEmbeddings(textos, { model });
  const insert = db.prepare(`
    INSERT INTO golpes (
      id,
      mensagem,
      rotulo,
      categoria,
      sinais,
      tags_json,
      embedding_json,
      embedding_model,
      embedding_provider
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      mensagem = excluded.mensagem,
      rotulo = excluded.rotulo,
      categoria = excluded.categoria,
      sinais = excluded.sinais,
      tags_json = excluded.tags_json,
      embedding_json = excluded.embedding_json,
      embedding_model = excluded.embedding_model,
      embedding_provider = excluded.embedding_provider,
      atualizado_em = CURRENT_TIMESTAMP
  `);

  db.exec("BEGIN");

  try {
    registros.forEach((registro, index) => {
      insert.run(
        registro.id,
        registro.mensagem,
        registro.rotulo,
        registro.categoria,
        registro.sinais,
        JSON.stringify(registro.tags),
        JSON.stringify(embeddings[index]),
        model,
        provider
      );
    });

    db.exec("COMMIT");
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }

  return {
    inseridos: registros.length,
    provider
  };
}

export async function analisarMensagemFraude(
  texto,
  {
    topK = TOP_K_PADRAO,
    dbUrl = DB_FRAUDE_PADRAO,
    datasetUrl = DATASET_GOLPES_PADRAO,
    model = process.env.HF_EMBEDDING_MODEL ?? HF_EMBEDDING_MODEL_PADRAO
  } = {}
) {
  const conexao = await conectarBancoFraudeRag(dbUrl);

  try {
    const carga = await popularDatasetGolpesSeNecessario(conexao.db, { datasetUrl, model });
    const { embedding, provider } = await gerarEmbedding(textoParaEmbedding(texto), { model });
    const matches = buscarGolpesSemelhantes(conexao.db, embedding, { topK, model });
    const pontuacao = calcularPontuacaoHeuristica(texto);
    const rag = calcularPontuacaoRag(matches);
    const scoreFinal = limitar01((rag.score * 0.55) + (pontuacao.score * 0.45));

    return {
      texto,
      scoreFinal,
      risco: classificarRisco(scoreFinal),
      pontuacao,
      rag: {
        score: rag.score,
        topK,
        provider: provider === "huggingface" ? provider : carga.provider,
        model,
        matches
      },
      dataset: {
        dbPath: conexao.dbPath,
        carregadosAgora: carga.inseridos
      }
    };
  } finally {
    conexao.db.close();
  }
}

export async function analisarConversaFraude(entradas, opcoes = {}) {
  const texto = entradas
    .map((entrada) => entrada.texto)
    .filter(Boolean)
    .join("\n");

  return analisarMensagemFraude(texto, opcoes);
}

export async function analisarConversasRecentesFraude({
  janelaHoras = 24,
  topK = TOP_K_PADRAO
} = {}) {
  const conversas = await listarConversasRecentesRag({ janelaHoras });
  const resultados = [];

  for (const conversa of conversas) {
    const analise = await analisarMensagemFraude(conversa.conteudo, { topK });

    resultados.push({
      conversa,
      analise
    });
  }

  return {
    janelaHoras,
    topK,
    totalConversas: resultados.length,
    resultados: resultados.sort((a, b) => b.analise.scoreFinal - a.analise.scoreFinal)
  };
}

export function buscarGolpesSemelhantes(db, embeddingConsulta, { topK = TOP_K_PADRAO, model } = {}) {
  const casos = db.prepare(`
    SELECT id, mensagem, rotulo, categoria, sinais, tags_json, embedding_json
    FROM golpes
    WHERE embedding_model = ?
  `).all(model);

  return casos
    .map((caso) => ({
      id: caso.id,
      mensagem: caso.mensagem,
      rotulo: caso.rotulo,
      categoria: caso.categoria,
      sinais: caso.sinais ? caso.sinais.split(";").filter(Boolean) : [],
      tags: JSON.parse(caso.tags_json),
      similaridade: similaridadeCosseno(embeddingConsulta, JSON.parse(caso.embedding_json))
    }))
    .sort((a, b) => b.similaridade - a.similaridade)
    .slice(0, topK);
}

export function calcularPontuacaoHeuristica(texto) {
  const normalizado = normalizarTexto(texto);
  const sinais = [];
  let score = 0;

  const regras = [
    ["urgencia", 0.16, /\b(urgente|urgencia|agora|imediatamente|hoje|24h|48h|bloquead[ao]|suspens[ao]|ultimo aviso)\b/],
    ["autoridade_impersonacao", 0.14, /\b(banco|nubank|santander|itau|caixa|receita federal|inss|mercado livre|central)\b/],
    ["dado_sensivel", 0.18, /\b(cpf|senha|codigo|sms|token|dados bancarios|cartao)\b/],
    ["link_suspeito", 0.18, /\b(bit\.ly|\.info|\.shop|\.click|\.net|http|www\.|link|clique|acesse)\b/],
    ["pedido_sigilo", 0.10, /\b(nao conta|sigilo|segredo|apaga rapido)\b/],
    ["oferta_boa_demais", 0.12, /\b(gratis|pre-aprovado|sem consulta|70%|desconto|libere ate)\b/],
    ["pedido_pagamento", 0.16, /\b(pix|taxa|sinal|boleto|pagamento|transferencia|deposito)\b/],
    ["pedido_reembolso", 0.12, /\b(reembolso|devolucao|devolver|estorno)\b/]
  ];

  for (const [nome, peso, regex] of regras) {
    if (regex.test(normalizado)) {
      score += peso;
      sinais.push(nome);
    }
  }

  const exclamacoes = (texto.match(/!/g) ?? []).length;
  const interrogacoes = (texto.match(/\?/g) ?? []).length;
  const caixaAlta = calcularRazaoCaixaAlta(texto);

  if (exclamacoes + interrogacoes >= 2) {
    score += 0.06;
    sinais.push("pontuacao_excessiva");
  }

  if (caixaAlta >= 0.18) {
    score += 0.06;
    sinais.push("caixa_alta");
  }

  return {
    score: limitar01(score),
    sinais,
    detalhes: {
      exclamacoes,
      interrogacoes,
      razaoCaixaAlta: caixaAlta
    }
  };
}

function calcularPontuacaoRag(matches) {
  const somaPesos = matches.reduce((soma, match) => soma + Math.max(match.similaridade, 0), 0);

  if (somaPesos === 0) {
    return { score: 0 };
  }

  const somaGolpe = matches.reduce((soma, match) => {
    const peso = Math.max(match.similaridade, 0);
    const valorRotulo = match.rotulo === "golpe" ? 1 : 0;

    return soma + (peso * valorRotulo);
  }, 0);

  return {
    score: limitar01(somaGolpe / somaPesos)
  };
}

async function gerarEmbeddings(textos, { model }) {
  const embeddingsHf = await gerarEmbeddingsHuggingFace(textos, { model });

  if (embeddingsHf) {
    return {
      embeddings: embeddingsHf,
      provider: "huggingface"
    };
  }

  return {
    embeddings: textos.map((texto) => gerarEmbeddingLocal(texto)),
    provider: "local"
  };
}

async function gerarEmbedding(texto, { model }) {
  const { embeddings, provider } = await gerarEmbeddings([texto], { model });

  return {
    embedding: embeddings[0],
    provider
  };
}

async function gerarEmbeddingsHuggingFace(textos, { model }) {
  const token = process.env.HF_TOKEN;

  if (!token) {
    return null;
  }

  try {
    const client = new InferenceClient(token);
    const payload = await client.featureExtraction({
      provider: "hf-inference",
      model,
      inputs: textos
    });

    const embeddings = normalizarRespostaEmbedding(payload, textos.length);

    return embeddings?.map(normalizarVetor) ?? null;
  } catch {
    return null;
  }
}

function normalizarRespostaEmbedding(payload, quantidadeEsperada) {
  if (!Array.isArray(payload)) {
    return null;
  }

  if (payload.length === quantidadeEsperada && payload.every(ehVetorNumerico)) {
    return payload;
  }

  if (quantidadeEsperada === 1 && ehVetorNumerico(payload)) {
    return [payload];
  }

  if (quantidadeEsperada === 1 && payload.every((item) => Array.isArray(item))) {
    return [mediaVetores(payload)];
  }

  return null;
}

function normalizarRegistroDataset(registro) {
  return {
    id: registro.id,
    mensagem: registro.mensagem,
    rotulo: registro.rotulo,
    categoria: registro.categoria,
    sinais: registro.sinais,
    tags: {
      urgencia: registro.tag_urgencia === "1",
      autoridadeImpersonacao: registro.tag_autoridade_impersonacao === "1",
      dadoSensivel: registro.tag_dado_sensivel === "1",
      linkSuspeito: registro.tag_link_suspeito === "1",
      pedidoSigilo: registro.tag_pedido_sigilo === "1",
      ofertaBoaDemais: registro.tag_oferta_boa_demais === "1"
    }
  };
}

function textoParaEmbedding(texto) {
  return `query: ${texto}`;
}

function parseCsv(conteudo) {
  const linhas = parseCsvLinhas(conteudo.trim());
  const [cabecalho, ...registros] = linhas;

  return registros.map((linha) => Object.fromEntries(
    cabecalho.map((coluna, index) => [coluna, linha[index] ?? ""])
  ));
}

function parseCsvLinhas(conteudo) {
  const linhas = [];
  let linha = [];
  let campo = "";
  let dentroAspas = false;

  for (let i = 0; i < conteudo.length; i += 1) {
    const char = conteudo[i];
    const proximo = conteudo[i + 1];

    if (char === "\"" && dentroAspas && proximo === "\"") {
      campo += "\"";
      i += 1;
    } else if (char === "\"") {
      dentroAspas = !dentroAspas;
    } else if (char === "," && !dentroAspas) {
      linha.push(campo);
      campo = "";
    } else if ((char === "\n" || char === "\r") && !dentroAspas) {
      if (char === "\r" && proximo === "\n") {
        i += 1;
      }

      linha.push(campo);
      linhas.push(linha);
      linha = [];
      campo = "";
    } else {
      campo += char;
    }
  }

  linha.push(campo);
  linhas.push(linha);

  return linhas.filter((item) => item.some((campoItem) => campoItem !== ""));
}

function normalizarTexto(texto) {
  return String(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function calcularRazaoCaixaAlta(texto) {
  const letras = String(texto).match(/[A-Za-z]/g) ?? [];

  if (letras.length === 0) {
    return 0;
  }

  const maiusculas = letras.filter((letra) => letra >= "A" && letra <= "Z").length;

  return maiusculas / letras.length;
}

function ehVetorNumerico(valor) {
  return Array.isArray(valor) && valor.every((item) => typeof item === "number");
}

function mediaVetores(vetores) {
  const validos = vetores.filter(ehVetorNumerico);

  if (validos.length === 0) {
    return [];
  }

  return validos[0].map((_, index) => (
    validos.reduce((soma, vetor) => soma + vetor[index], 0) / validos.length
  ));
}

function normalizarVetor(vetor) {
  const norma = Math.sqrt(vetor.reduce((soma, valor) => soma + valor * valor, 0));

  if (norma === 0) {
    return vetor;
  }

  return vetor.map((valor) => valor / norma);
}

function similaridadeCosseno(a, b) {
  return a.reduce((soma, valor, index) => soma + valor * b[index], 0);
}

function limitar01(valor) {
  return Math.max(0, Math.min(1, valor));
}

function classificarRisco(score) {
  if (score >= 0.7) {
    return "alto";
  }

  if (score >= 0.4) {
    return "medio";
  }

  return "baixo";
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const modoRecentes = process.argv.includes("--recentes");
  const texto = process.argv.filter((arg) => arg !== "--recentes").slice(2).join(" ")
    || "URGENTE, sua conta foi bloqueada. Clique no link e informe senha e codigo SMS.";

  if (modoRecentes) {
    const resultado = await analisarConversasRecentesFraude();

    console.log(`Conversas recentes analisadas: ${resultado.totalConversas}`);
    console.log(`Janela: ultimas ${resultado.janelaHoras}h`);

    for (const [index, item] of resultado.resultados.entries()) {
      console.log(`\n${index + 1}. ${item.conversa.titulo}`);
      console.log(`score final: ${item.analise.scoreFinal.toFixed(4)} (${item.analise.risco})`);
      console.log(`score pontuacao: ${item.analise.pontuacao.score.toFixed(4)}`);
      console.log(`score RAG: ${item.analise.rag.score.toFixed(4)} (${item.analise.rag.provider})`);
      console.log(`ultima mensagem: ${item.conversa.ultimaMensagemEm}`);

      for (const match of item.analise.rag.matches) {
        console.log(`- ${match.rotulo}/${match.categoria} | sim=${match.similaridade.toFixed(4)}`);
      }
    }

    process.exit(0);
  }

  const resultado = await analisarMensagemFraude(texto);

  console.log(`Score final: ${resultado.scoreFinal.toFixed(4)} (${resultado.risco})`);
  console.log(`Score pontuacao: ${resultado.pontuacao.score.toFixed(4)}`);
  console.log(`Score RAG: ${resultado.rag.score.toFixed(4)} (${resultado.rag.provider})`);
  console.log("\nTop 3 exemplos semelhantes:");

  for (const [index, match] of resultado.rag.matches.entries()) {
    console.log(`${index + 1}. ${match.rotulo}/${match.categoria} | sim=${match.similaridade.toFixed(4)}`);
    console.log(match.mensagem);
  }
}
