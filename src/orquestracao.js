import "dotenv/config";
import { Annotation, END, START, StateGraph } from "@langchain/langgraph";
import { pathToFileURL } from "node:url";
import {
  agenteDummyNode,
  normalizarConversaWhatsappNode,
  separarMensagensNode,
  transcreverAudiosNode
} from "./agentes.js";

const EstadoWhatsapp = Annotation.Root({
  mensagens: Annotation({
    reducer: (_, next) => next,
    default: () => []
  }),
  mensagensTexto: Annotation({
    reducer: (_, next) => next,
    default: () => []
  }),
  mensagensAudio: Annotation({
    reducer: (_, next) => next,
    default: () => []
  }),
  transcricoesAudio: Annotation({
    reducer: (_, next) => next,
    default: () => []
  }),
  resultadoAgente: Annotation({
    reducer: (_, next) => next,
    default: () => null
  })
});

const workflow = new StateGraph(EstadoWhatsapp);

workflow
  .addNode("normalizar_conversa_whatsapp", normalizarConversaWhatsappNode)
  .addNode("separar_mensagens", separarMensagensNode)
  .addNode("transcrever_audios", transcreverAudiosNode)
  .addNode("agente_dummy", agenteDummyNode)
  .addEdge(START, "normalizar_conversa_whatsapp")
  .addEdge("normalizar_conversa_whatsapp", "separar_mensagens")
  .addEdge("separar_mensagens", "transcrever_audios")
  .addEdge("transcrever_audios", "agente_dummy")
  .addEdge("agente_dummy", END);

export const grafoWhatsapp = workflow.compile();

export async function processarConversaWhatsapp(mensagens) {
  return grafoWhatsapp.invoke({ mensagens });
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const conversaExemplo = [
    {
      id: "1",
      autor: "cliente",
      tipo: "texto",
      conteudo: "Oi, queria saber o prazo do pedido.",
      timestamp: "2026-08-08T10:00:00-03:00"
    },
    {
      id: "2",
      autor: "cliente",
      tipo: "audio",
      audioPath: "./audios/audio-exemplo.mp3",
      timestamp: "2026-08-08T10:01:00-03:00"
    }
  ];

  const resultado = await processarConversaWhatsapp(conversaExemplo);
  console.dir(resultado.resultadoAgente, { depth: null });
}
