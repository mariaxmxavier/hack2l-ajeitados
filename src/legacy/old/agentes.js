import { createReadStream, existsSync } from "node:fs";

const DEFAULT_STT_MODEL_ID = process.env.ELEVENLABS_STT_MODEL_ID ?? "scribe_v2";

export function normalizarConversaWhatsappNode(state) {
  const mensagens = Array.isArray(state.mensagens) ? state.mensagens : [];

  return {
    ...state,
    mensagens: mensagens.map((mensagem, index) => ({
      id: mensagem.id ?? `msg-${index + 1}`,
      conversaId: mensagem.conversaId ?? "conversa-padrao",
      autor: mensagem.autor ?? "desconhecido",
      tipo: mensagem.tipo ?? inferirTipoMensagem(mensagem),
      conteudo: mensagem.conteudo ?? "",
      audioPath: mensagem.audioPath ?? null,
      timestamp: mensagem.timestamp ?? null,
      recebidoEm: mensagem.recebidoEm ?? null
    }))
  };
}

export function separarMensagensNode(state) {
  const mensagens = Array.isArray(state.mensagens) ? state.mensagens : [];

  return {
    ...state,
    mensagensTexto: mensagens.filter((mensagem) => mensagem.tipo === "texto"),
    mensagensAudio: mensagens.filter((mensagem) => mensagem.tipo === "audio")
  };
}

export async function transcreverAudiosNode(state) {
  const mensagensAudio = Array.isArray(state.mensagensAudio) ? state.mensagensAudio : [];

  if (mensagensAudio.length === 0) {
    return {
      ...state,
      transcricoesAudio: []
    };
  }

  const client = await criarClienteElevenLabs();

  const transcricoesAudio = await Promise.all(
    mensagensAudio.map(async (mensagem) => ({
      ...mensagem,
      transcricao: await transcreverAudioDummy(client, mensagem)
    }))
  );

  return {
    ...state,
    transcricoesAudio
  };
}

export async function agenteDummyNode(state) {
  const mensagens = Array.isArray(state.mensagens) ? state.mensagens : [];
  const mensagensTexto = Array.isArray(state.mensagensTexto) ? state.mensagensTexto : [];
  const transcricoesAudio = Array.isArray(state.transcricoesAudio) ? state.transcricoesAudio : [];
  const transcricoesPorId = new Map(
    transcricoesAudio.map((mensagem) => [mensagem.id, mensagem.transcricao])
  );

  const entradas = mensagens.map((mensagem) => {
    if (mensagem.tipo === "audio") {
      return {
        id: mensagem.id,
        conversaId: mensagem.conversaId,
        autor: mensagem.autor,
        origem: "audio",
        texto: transcricoesPorId.get(mensagem.id) ?? ""
      };
    }

    return {
      id: mensagem.id,
      conversaId: mensagem.conversaId,
      autor: mensagem.autor,
      origem: "texto",
      texto: mensagem.conteudo
    };
  });

  return {
    ...state,
    resultadoAgente: {
      agente: "dummy",
      totalMensagensTexto: mensagensTexto.length,
      totalMensagensAudio: transcricoesAudio.length,
      entradas,
      resumo: `Recebi ${entradas.length} mensagens processadas.`
    }
  };
}

async function criarClienteElevenLabs() {
  const apiKey = process.env.ELEVENLABS_API_KEY;

  if (!apiKey) {
    return null;
  }

  const { ElevenLabsClient } = await import("@elevenlabs/elevenlabs-js");
  return new ElevenLabsClient({ apiKey });
}

async function transcreverAudioDummy(client, mensagem) {
  if (!client || !mensagem.audioPath || !existsSync(mensagem.audioPath)) {
    return `[dummy] Transcricao simulada para ${mensagem.audioPath ?? mensagem.id}.`;
  }

  const resultado = await client.speechToText.convert({
    file: createReadStream(mensagem.audioPath),
    modelId: DEFAULT_STT_MODEL_ID
  });

  return resultado.text ?? "";
}

function inferirTipoMensagem(mensagem) {
  if (mensagem.audioPath || mensagem.mimeType?.startsWith("audio/")) {
    return "audio";
  }

  return "texto";
}
