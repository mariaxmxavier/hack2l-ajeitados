import "dotenv/config";
import { createReadStream, existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { analisarConversaFraude } from "./legacy/old/fraude-rag.js";
import { processarConversaWhatsapp } from "./legacy/old/orquestracao.js";
import { consultarRag, salvarConversaProcessadaRag } from "./legacy/old/rag.js";

const PORTA_PADRAO = Number(process.env.DEMO_PORT ?? 5173);
const RAIZ_PROJETO = resolve(fileURLToPath(new URL("..", import.meta.url)));
const PUBLIC_DIR = join(RAIZ_PROJETO, "public");
const AUDIOS_DIR = join(RAIZ_PROJETO, "audios");
const AUDIO_GERADO_DIR = join(RAIZ_PROJETO, "data", "generated");
const ORIENTACAO_AUDIO_PATH = join(AUDIO_GERADO_DIR, "orientacao-antifraude-ptbr-v2.mp3");
const EVENTOS_DEMO = new URL("../data/conversa-demo-audios.json", import.meta.url);
const ELEVENLABS_VOICE_ID = process.env.ELEVENLABS_VOICE_ID ?? null;
const TEXTO_ORIENTACAO = [
  "Atencao, isso pode ser golpe.",
  "Nao faca um novo Pix.",
  "Se o valor entrou por engano, devolva apenas pela funcao oficial do banco.",
  "Sua familia tambem esta sendo avisada."
].join(" ");

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".mp4": "audio/mp4",
  ".wav": "audio/wav"
};

const requestHandler = async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === "GET" && url.pathname === "/api/demo-events") {
      await responderJson(res, await carregarEventosDemo());
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/analisar") {
      await responderJson(res, await analisarPayload(await lerJson(req)));
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/orientacao-audio") {
      await responderAudioOrientacao(res);
      return;
    }

    if (req.method === "GET" && url.pathname.startsWith("/audios/")) {
      servirArquivo(res, AUDIOS_DIR, decodeURIComponent(url.pathname.replace("/audios/", "")));
      return;
    }

    if (req.method === "GET") {
      const arquivo = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname.slice(1));
      servirArquivo(res, PUBLIC_DIR, arquivo);
      return;
    }

    responderErro(res, 405, "Metodo nao suportado.");
  } catch (error) {
    responderErro(res, 500, error.message);
  }
};

iniciarServidor(PORTA_PADRAO);

function iniciarServidor(porta, tentativasRestantes = 10) {
  const server = createServer(requestHandler);

  server.once("error", (error) => {
    if (error.code === "EADDRINUSE" && tentativasRestantes > 0) {
      const proximaPorta = porta + 1;

      console.log(`Porta ${porta} em uso. Tentando http://localhost:${proximaPorta}`);
      server.close();
      iniciarServidor(proximaPorta, tentativasRestantes - 1);
      return;
    }

    throw error;
  });

  server.listen(porta, () => {
    console.log(`Demo antifraude rodando em http://localhost:${porta}`);
  });
}

async function carregarEventosDemo() {
  const eventos = JSON.parse(await readFile(EVENTOS_DEMO, "utf8"));

  return eventos.map((evento) => ({
    delayMs: evento.delayMs,
    mensagem: {
      ...evento.mensagem,
      audioUrl: evento.mensagem.audioPath
        ? `/audios/${evento.mensagem.audioPath.split(/[\\/]/).at(-1)}`
        : null
    }
  }));
}

async function analisarPayload(payload) {
  const mensagens = Array.isArray(payload.mensagens) ? payload.mensagens : [];
  const threshold = Number.isFinite(payload.threshold) ? payload.threshold : 0.7;
  const conversaId = mensagens.at(-1)?.conversaId ?? "demo";
  const resultado = await processarConversaWhatsapp(mensagens);
  const casoSalvo = await salvarConversaProcessadaRag(conversaId, resultado.resultadoAgente);
  const textoConsulta = resultado.resultadoAgente?.entradas
    ?.map((entrada) => entrada.texto)
    .join("\n") ?? "";
  const rag = await consultarRag(textoConsulta, { topK: 3 });
  const fraude = await analisarConversaFraude(resultado.resultadoAgente?.entradas ?? [], { topK: 3 });
  const alertaAtivo = fraude.scoreFinal >= threshold;

  return {
    conversaId,
    resultado: resultado.resultadoAgente,
    casoSalvo,
    rag,
    fraude,
    threshold,
    notificacoes: alertaAtivo
      ? [
          "Possivel golpe detectado. Interrompa a conversa antes de enviar dinheiro ou dados.",
          "Familia do usuario tambem esta sendo notificada."
        ]
      : []
  };
}

async function responderAudioOrientacao(res) {
  if (!existsSync(ORIENTACAO_AUDIO_PATH)) {
    await gerarAudioOrientacao();
  }

  res.writeHead(200, {
    "Content-Type": "audio/mpeg",
    "Cache-Control": "public, max-age=3600"
  });
  createReadStream(ORIENTACAO_AUDIO_PATH)
    .on("error", () => responderErro(res, 503, "Audio de orientacao indisponivel."))
    .pipe(res);
}

async function gerarAudioOrientacao() {
  const apiKey = process.env.ELEVENLABS_API_KEY;

  if (!apiKey) {
    throw new Error("ELEVENLABS_API_KEY nao configurada.");
  }

  const { ElevenLabsClient } = await import("@elevenlabs/elevenlabs-js");
  const client = new ElevenLabsClient({ apiKey });
  const voiceId = ELEVENLABS_VOICE_ID ?? await escolherVozPortugues(client);

  if (!voiceId) {
    throw new Error("Nenhuma voz em portugues encontrada no ElevenLabs.");
  }

  const audioStream = await client.textToSpeech.convert(voiceId, {
    text: TEXTO_ORIENTACAO,
    modelId: process.env.ELEVENLABS_TTS_MODEL_ID ?? "eleven_multilingual_v2",
    outputFormat: "mp3_44100_128"
  });
  const buffer = await readableStreamToBuffer(audioStream);

  await mkdir(AUDIO_GERADO_DIR, { recursive: true });
  await writeFile(ORIENTACAO_AUDIO_PATH, buffer);
}

async function escolherVozPortugues(client) {
  const buscas = ["portuguese", "portugues", "brasil", "brazil"];

  for (const termo of buscas) {
    const resposta = await client.voices.search({
      search: termo,
      pageSize: 20
    });
    const voz = resposta.voices?.find(pareceVozPortugues);

    if (voz?.voiceId) {
      console.log(`Voz ElevenLabs selecionada para pt-BR: ${voz.name ?? voz.voiceId}`);
      return voz.voiceId;
    }
  }

  return null;
}

function pareceVozPortugues(voz) {
  const texto = [
    voz.name,
    voz.description,
    ...Object.values(voz.labels ?? {}),
    ...(voz.verifiedLanguages ?? []).map((idioma) => `${idioma.language ?? ""} ${idioma.accent ?? ""}`)
  ].join(" ").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  return /\b(portuguese|portugues|brasil|brazil|pt-br|pt_br|pt)\b/.test(texto);
}

async function readableStreamToBuffer(stream) {
  const chunks = [];

  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk));
  }

  return Buffer.concat(chunks);
}

function servirArquivo(res, baseDir, arquivoRelativo) {
  const caminho = normalize(join(baseDir, arquivoRelativo));

  if (!caminho.startsWith(baseDir)) {
    responderErro(res, 403, "Acesso negado.");
    return;
  }

  res.writeHead(200, {
    "Content-Type": MIME_TYPES[extname(caminho).toLowerCase()] ?? "application/octet-stream"
  });
  createReadStream(caminho).on("error", () => responderErro(res, 404, "Arquivo nao encontrado.")).pipe(res);
}

function lerJson(req) {
  return new Promise((resolvePayload, rejectPayload) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        resolvePayload(body ? JSON.parse(body) : {});
      } catch (error) {
        rejectPayload(error);
      }
    });
    req.on("error", rejectPayload);
  });
}

async function responderJson(res, payload) {
  res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function responderErro(res, status, mensagem) {
  if (res.headersSent) {
    res.destroy();
    return;
  }

  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify({ erro: mensagem }));
}
