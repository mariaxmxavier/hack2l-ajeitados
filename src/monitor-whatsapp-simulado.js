import "dotenv/config";
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
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

    await aoProcessar({
      conversaId,
      mensagemRecebida: mensagem,
      totalMensagensNaConversa: conversaAtualizada.length,
      resultado: resultado.resultadoAgente,
      casoSalvo,
      rag
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
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await iniciarMonitorWhatsappSimulado();
}
