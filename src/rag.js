import "dotenv/config";
import { DatabaseSync } from "node:sqlite";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const DB_PADRAO = new URL("../data/rag.sqlite", import.meta.url);
const DIMENSOES_EMBEDDING = 128;
const TOP_K_PADRAO = 3;
const JANELA_HORAS_PADRAO = 24;

export async function conectarBancoRag(dbUrl = DB_PADRAO) {
  const dbPath = fileURLToPath(dbUrl);
  const jaExistia = existsSync(dbPath);

  await mkdir(dirname(dbPath), { recursive: true });

  const db = new DatabaseSync(dbPath);
  prepararBanco(db);

  return {
    db,
    dbPath,
    criadoAgora: !jaExistia
  };
}

export function prepararBanco(db) {
  const tabelaExistente = db.prepare(`
    SELECT name
    FROM sqlite_master
    WHERE type = 'table' AND name = 'casos'
  `).get();

  if (tabelaExistente) {
    const colunas = db.prepare("PRAGMA table_info(casos)").all().map((coluna) => coluna.name);

    if (!colunas.includes("conversa_id") || !colunas.includes("ultima_mensagem_em")) {
      db.exec("DROP TABLE casos");
    }
  }

  db.exec(`
    CREATE TABLE IF NOT EXISTS casos (
      id TEXT PRIMARY KEY,
      conversa_id TEXT NOT NULL UNIQUE,
      titulo TEXT NOT NULL,
      conteudo TEXT NOT NULL,
      metadata_json TEXT NOT NULL DEFAULT '{}',
      embedding_json TEXT NOT NULL,
      primeira_mensagem_em TEXT,
      ultima_mensagem_em TEXT NOT NULL,
      total_mensagens INTEGER NOT NULL DEFAULT 0,
      criado_em TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      atualizado_em TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_casos_ultima_mensagem_em
    ON casos (ultima_mensagem_em);
  `);
}

export function salvarConversaComoCaso(db, conversaId, entradas, metadata = {}) {
  const mensagens = Array.isArray(entradas) ? entradas : [];

  if (mensagens.length === 0) {
    return null;
  }

  const mensagensOrdenadas = [...mensagens].sort(
    (a, b) => Date.parse(obterDataMensagem(a)) - Date.parse(obterDataMensagem(b))
  );
  const primeiraMensagemEm = obterDataMensagem(mensagensOrdenadas[0]);
  const ultimaMensagemEm = obterDataMensagem(mensagensOrdenadas.at(-1));
  const conteudo = montarConteudoConversa(mensagensOrdenadas);
  const titulo = `Conversa ${conversaId}`;
  const id = `conversa:${conversaId}`;
  const textoBase = `${titulo}\n${conteudo}`;
  const statement = db.prepare(`
    INSERT INTO casos (
      id,
      conversa_id,
      titulo,
      conteudo,
      metadata_json,
      embedding_json,
      primeira_mensagem_em,
      ultima_mensagem_em,
      total_mensagens
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(conversa_id) DO UPDATE SET
      titulo = excluded.titulo,
      conteudo = excluded.conteudo,
      metadata_json = excluded.metadata_json,
      embedding_json = excluded.embedding_json,
      primeira_mensagem_em = excluded.primeira_mensagem_em,
      ultima_mensagem_em = excluded.ultima_mensagem_em,
      total_mensagens = excluded.total_mensagens,
      atualizado_em = CURRENT_TIMESTAMP
  `);

  statement.run(
    id,
    conversaId,
    titulo,
    conteudo,
    JSON.stringify({
      ...metadata,
      origem: "whatsapp",
      tipoCaso: "conversa"
    }),
    JSON.stringify(gerarEmbeddingLocal(textoBase)),
    primeiraMensagemEm,
    ultimaMensagemEm,
    mensagensOrdenadas.length
  );

  return {
    id,
    conversaId,
    titulo,
    conteudo,
    primeiraMensagemEm,
    ultimaMensagemEm,
    totalMensagens: mensagensOrdenadas.length
  };
}

export function buscarCasosSemelhantes(
  db,
  consulta,
  { topK = TOP_K_PADRAO, janelaHoras = JANELA_HORAS_PADRAO, agora = new Date() } = {}
) {
  const embeddingConsulta = gerarEmbeddingLocal(consulta);
  const inicioJanela = new Date(agora.getTime() - janelaHoras * 60 * 60 * 1000).toISOString();
  const casos = db.prepare(`
    SELECT
      id,
      conversa_id,
      titulo,
      conteudo,
      metadata_json,
      embedding_json,
      primeira_mensagem_em,
      ultima_mensagem_em,
      total_mensagens
    FROM casos
    WHERE ultima_mensagem_em >= ?
    ORDER BY ultima_mensagem_em DESC
  `).all(inicioJanela);

  return casos
    .map((caso) => ({
      id: caso.id,
      conversaId: caso.conversa_id,
      titulo: caso.titulo,
      conteudo: caso.conteudo,
      metadata: JSON.parse(caso.metadata_json),
      primeiraMensagemEm: caso.primeira_mensagem_em,
      ultimaMensagemEm: caso.ultima_mensagem_em,
      totalMensagens: caso.total_mensagens,
      score: similaridadeCosseno(embeddingConsulta, JSON.parse(caso.embedding_json))
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

export async function salvarConversaProcessadaRag(conversaId, resultadoAgente, { dbUrl = DB_PADRAO } = {}) {
  const conexao = await conectarBancoRag(dbUrl);

  try {
    return salvarConversaComoCaso(conexao.db, conversaId, resultadoAgente?.entradas ?? [], {
      agente: resultadoAgente?.agente,
      totalMensagensTexto: resultadoAgente?.totalMensagensTexto,
      totalMensagensAudio: resultadoAgente?.totalMensagensAudio
    });
  } finally {
    conexao.db.close();
  }
}

export async function consultarRag(
  consulta,
  { topK = TOP_K_PADRAO, janelaHoras = JANELA_HORAS_PADRAO, dbUrl = DB_PADRAO } = {}
) {
  const conexao = await conectarBancoRag(dbUrl);

  try {
    const casos = buscarCasosSemelhantes(conexao.db, consulta, { topK, janelaHoras });

    return {
      dbPath: conexao.dbPath,
      bancoCriadoAgora: conexao.criadoAgora,
      consulta,
      topK,
      janelaHoras,
      casos
    };
  } finally {
    conexao.db.close();
  }
}

export function montarConteudoConversa(mensagens) {
  return mensagens
    .map((mensagem) => {
      const horario = obterDataMensagem(mensagem);
      const autor = mensagem.autor ?? "desconhecido";
      const origem = mensagem.origem ?? mensagem.tipo ?? "texto";
      const texto = mensagem.texto ?? mensagem.conteudo ?? "";

      return `[${horario}] ${autor} (${origem}): ${texto}`;
    })
    .join("\n");
}

function obterDataMensagem(mensagem) {
  return mensagem.timestamp ?? mensagem.recebidoEm ?? new Date().toISOString();
}

export function gerarEmbeddingLocal(texto) {
  const vetor = new Array(DIMENSOES_EMBEDDING).fill(0);
  const tokens = tokenizar(texto);

  for (const token of tokens) {
    const indice = hashToken(token) % DIMENSOES_EMBEDDING;
    vetor[indice] += 1;
  }

  return normalizarVetor(vetor);
}

function tokenizar(texto) {
  return String(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .match(/[a-z0-9]+/g) ?? [];
}

function hashToken(token) {
  let hash = 2166136261;

  for (let i = 0; i < token.length; i += 1) {
    hash ^= token.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
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

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const consulta = process.argv.slice(2).join(" ")
    || "cliente quer saber prazo do pedido e rastreamento";
  const resultado = await consultarRag(consulta);

  console.log(`Banco: ${resultado.dbPath}`);
  console.log(`Criado agora: ${resultado.bancoCriadoAgora}`);
  console.log(`Consulta: ${resultado.consulta}`);
  console.log(`Janela: ultimas ${resultado.janelaHoras}h`);
  console.log("\nTop 3 casos semelhantes:");

  for (const [index, caso] of resultado.casos.entries()) {
    console.log(`\n${index + 1}. ${caso.titulo}`);
    console.log(`score: ${caso.score.toFixed(4)}`);
    console.log(`id: ${caso.id}`);
    console.log(`conversa: ${caso.conversaId}`);
    console.log(`ultima mensagem: ${caso.ultimaMensagemEm}`);
    console.log(caso.conteudo);
  }
}
