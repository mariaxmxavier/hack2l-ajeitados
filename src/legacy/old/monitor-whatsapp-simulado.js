import "dotenv/config";
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { analisarConversaFraude } from "./fraude-rag.js";
import { processarConversaWhatsapp } from "./orquestracao.js";
import { consultarRag, salvarConversaProcessadaRag } from "./rag.js";

const CAMINHO_EVENTOS_PADRAO = new URL("../data/conversa-simulada.json", import.meta.url);

export async function iniciarMonitorWhatsappSimulado({
  eventosPath = CAMINHO_EVENTOS_PADRAO,
  aoProcessar = imprimirResultadoMonitor
} = {}) {
  const eventos = await carregarEventos(eventosPath);
  const historicoPorConversa = new Map();

  for (const evento of eventos) {
    await aguardar(evento.delayMs ?? 0);

    const mensagem = {
      ...evento.mensagem,
      recebidoEm: new Date().toISOString()
    };
    const conversaId = mensagem.conversaId ?? "conversa-padrao";
    const historico = historicoPorConversa.get(conversaId) ?? [];
    const conversaAtualizada = [...historico, mensagem];

    historicoPorConversa.set(conversaId, conversaAtualizada);

    const resultado = await processarConversaWhatsapp(conversaAtualizada);
    const casoSalvo = await salvarConversaProcessadaRag(conversaId, resultado.resultadoAgente);
    const textoConsulta = resultado.resultadoAgente?.entradas
      ?.map((entrada) => entrada.texto)
      .join("\n") ?? "";
    const rag = await consultarRag(textoConsulta, { topK: 3 });
    const fraude = await analisarConversaFraude(resultado.resultadoAgente?.entradas ?? [], { topK: 3 });

    await aoProcessar({
      conversaId,
      mensagemRecebida: mensagem,
      totalMensagensNaConversa: conversaAtualizada.length,
      resultado: resultado.resultadoAgente,
      casoSalvo,
      rag,
      fraude
    });
  }
}

async function carregarEventos(eventosPath) {
  const conteudo = await readFile(eventosPath, "utf8");
  const eventos = JSON.parse(conteudo);

  if (!Array.isArray(eventos)) {
    throw new Error("O arquivo de eventos precisa conter uma lista JSON.");
  }

  return eventos;
}

function aguardar(delayMs) {
  return new Promise((resolve) => setTimeout(resolve, delayMs));
}

function imprimirResultadoMonitor(eventoProcessado) {
  console.log("\n--- nova mensagem monitorada ---");
  console.log(`conversa: ${eventoProcessado.conversaId}`);
  console.log(`mensagem: ${eventoProcessado.mensagemRecebida.id}`);
  console.log(`tipo: ${eventoProcessado.mensagemRecebida.tipo}`);
  console.log(`total no historico: ${eventoProcessado.totalMensagensNaConversa}`);
  console.log(`caso RAG salvo: ${eventoProcessado.casoSalvo?.id}`);
  console.dir(eventoProcessado.resultado, { depth: null });

  console.log("\nTop 3 conversas semelhantes nas ultimas 24h:");
  for (const [index, caso] of eventoProcessado.rag.casos.entries()) {
    console.log(`${index + 1}. ${caso.titulo} | score=${caso.score.toFixed(4)} | mensagens=${caso.totalMensagens}`);
  }

  console.log("\nAnalise antifraude:");
  console.log(`score final: ${eventoProcessado.fraude.scoreFinal.toFixed(4)} (${eventoProcessado.fraude.risco})`);
  console.log(`score pontuacao: ${eventoProcessado.fraude.pontuacao.score.toFixed(4)}`);
  console.log(`score RAG golpes: ${eventoProcessado.fraude.rag.score.toFixed(4)} | provider=${eventoProcessado.fraude.rag.provider}`);
  for (const [index, match] of eventoProcessado.fraude.rag.matches.entries()) {
    console.log(`${index + 1}. ${match.rotulo}/${match.categoria} | sim=${match.similaridade.toFixed(4)}`);
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const eventosPath = process.argv[2] ? pathToFileURL(process.argv[2]) : CAMINHO_EVENTOS_PADRAO;

  await iniciarMonitorWhatsappSimulado({ eventosPath });
}
