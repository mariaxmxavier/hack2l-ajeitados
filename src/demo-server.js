import "dotenv/config";
import { randomUUID } from "node:crypto";
import { createReadStream, existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { executarPipelineAntifraude } from "./pipeline/antifraude.js";

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
const acoesOperacionais = new Map();

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".mp4": "audio/mp4",
  ".wav": "audio/wav"
};

export function createDemoServer() {
  return createServer(requestHandler);
}

async function requestHandler(req, res) {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === "GET" && url.pathname === "/api/health") {
      await responderJson(res, {
        status: "ok",
        pipeline: "antifraude",
        mode: process.env.GORILLA_OFFLINE === "0" ? "gorilla-live" : "gorilla-fixture"
      });
      return;
    }
    if (req.method === "GET" && url.pathname === "/api/demo-events") {
      await responderJson(res, await carregarEventosDemo());
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/analisar") {
      await responderJson(res, await analisarPayload(await lerJson(req)));
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/acoes") {
      await responderJson(res, registrarAcao(await lerJson(req)));
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
      servirArquivo(res, PUBLIC_DIR, url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname.slice(1)));
      return;
    }
    responderErro(res, 405, "Metodo nao suportado.");
  } catch (error) {
    responderErro(res, 500, error.message);
  }
}

export function iniciarServidor(porta, tentativasRestantes = 10) {
  const server = createDemoServer();
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
  server.listen(porta, () => console.log(`Demo antifraude rodando em http://localhost:${porta}`));
  return server;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  iniciarServidor(PORTA_PADRAO);
}

async function carregarEventosDemo() {
  const eventos = JSON.parse(await readFile(EVENTOS_DEMO, "utf8"));
  return eventos.map((evento) => ({
    delayMs: evento.delayMs,
    mensagem: {
      ...evento.mensagem,
      audioUrl: evento.mensagem.audioPath ? `/audios/${evento.mensagem.audioPath.split(/[\\/]/).at(-1)}` : null
    }
  }));
}

async function analisarPayload(payload) {
  const mensagens = Array.isArray(payload.mensagens) ? payload.mensagens : [];
  if (mensagens.length === 0) throw new Error("Envie ao menos uma mensagem para analise.");

  const threshold = Number.isFinite(payload.threshold) ? Math.min(0.95, Math.max(0.3, payload.threshold)) : 0.7;
  const conversaId = mensagens.at(-1)?.conversaId ?? "demo";
  const resultado = await executarPipelineAntifraude(mensagens, {
    runId: `mockup-${randomUUID()}`,
    riskThreshold: threshold,
    topK: 5
  });
  const fraude = apresentarResultado(resultado);
  const alertaAtivo = resultado.decision?.action === "pausar";

  return {
    conversaId,
    pipeline: resumirPipeline(resultado),
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

function apresentarResultado(resultado) {
  const hits = resultado.retrieval ?? [];
  const scoreFinal = resultado.risk?.riskScore ?? 0;
  return {
    scoreFinal,
    risco: resultado.decision?.action ?? "escalar",
    pontuacao: { score: scoreFinal, sinais: extrairSinais(resultado) },
    rag: {
      score: hits[0]?.score ?? 0,
      matches: hits.slice(0, 5).map((hit) => ({
        rotulo: hit.title || "Documento sem titulo",
        categoria: hit.namespace,
        similaridade: hit.score,
        proveniencia: hit.sourceType
      }))
    },
    decisao: resultado.decision,
    degradado: Boolean(resultado.gorillaError)
  };
}

function extrairSinais(resultado) {
  // Os sinais exibidos ao usuário devem vir da conversa atual, não de palavras
  // presentes em documentos de outras conversas recuperados pelo RAG.
  const corpus = String(resultado.query ?? "").toLowerCase();
  const regras = [
    [/\bpix\b|devolu[cç][aã]o/, "pedido de Pix ou devolucao"],
    [/urgente|urg[êe]ncia|agora|imediat/, "urgencia e pressao para agir"],
    [/n[aã]o conte|segredo/, "pedido de sigilo"],
    [/https?:\/\/|\blink\b|c[oó]digo\s*(sms)?/, "link ou codigo de verificacao"],
    [/senha|documento|dados pessoais/, "solicitacao de dados sensiveis"]
  ];
  const sinais = regras.filter(([padrao]) => padrao.test(corpus)).map(([, sinal]) => sinal);
  return sinais.length > 0 ? sinais : ["evidencias recuperadas pelo RAG"];
}

function resumirPipeline(resultado) {
  return {
    pipeline: resultado.pipeline,
    runId: resultado.runId,
    status: resultado.status,
    query: resultado.query,
    gorilla: resultado.gorilla ? { searchId: resultado.gorilla.search_id, qualityGate: resultado.gorilla.quality_gate } : null,
    gorillaError: resultado.gorillaError,
    risk: resultado.risk,
    decision: resultado.decision,
    retrieval: (resultado.retrieval ?? []).map(({ id, namespace, sourceType, title, score, metadata }) => ({ id, namespace, sourceType, title, score, metadata }))
  };
}

function registrarAcao(payload) {
  const runId = String(payload.runId ?? "");
  const action = String(payload.action ?? "");
  if (!runId || !["bloquear_contato", "solicitar_revisao"].includes(action)) throw new Error("Acao operacional invalida.");
  const registro = { runId, action, status: "registrada", simulated: true, createdAt: new Date().toISOString() };
  acoesOperacionais.set(runId, registro);
  return registro;
}

async function responderAudioOrientacao(res) {
  if (!existsSync(ORIENTACAO_AUDIO_PATH)) await gerarAudioOrientacao();
  res.writeHead(200, { "Content-Type": "audio/mpeg", "Cache-Control": "public, max-age=3600" });
  createReadStream(ORIENTACAO_AUDIO_PATH).on("error", () => responderErro(res, 503, "Audio de orientacao indisponivel.")).pipe(res);
}

async function gerarAudioOrientacao() {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) throw new Error("ELEVENLABS_API_KEY nao configurada.");
  const { ElevenLabsClient } = await import("@elevenlabs/elevenlabs-js");
  const client = new ElevenLabsClient({ apiKey });
  const voiceId = ELEVENLABS_VOICE_ID ?? await escolherVozPortugues(client);
  if (!voiceId) throw new Error("Nenhuma voz em portugues encontrada no ElevenLabs.");
  const audioStream = await client.textToSpeech.convert(voiceId, {
    text: TEXTO_ORIENTACAO,
    modelId: process.env.ELEVENLABS_TTS_MODEL_ID ?? "eleven_multilingual_v2",
    outputFormat: "mp3_44100_128"
  });
  await mkdir(AUDIO_GERADO_DIR, { recursive: true });
  await writeFile(ORIENTACAO_AUDIO_PATH, await readableStreamToBuffer(audioStream));
}

async function escolherVozPortugues(client) {
  for (const termo of ["portuguese", "portugues", "brasil", "brazil"]) {
    const resposta = await client.voices.search({ search: termo, pageSize: 20 });
    const voz = resposta.voices?.find(pareceVozPortugues);
    if (voz?.voiceId) return voz.voiceId;
  }
  return null;
}

function pareceVozPortugues(voz) {
  const texto = [voz.name, voz.description, ...Object.values(voz.labels ?? {}), ...(voz.verifiedLanguages ?? []).map((idioma) => `${idioma.language ?? ""} ${idioma.accent ?? ""}`)]
    .join(" ").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  return /\b(portuguese|portugues|brasil|brazil|pt-br|pt_br|pt)\b/.test(texto);
}

async function readableStreamToBuffer(stream) {
  const chunks = [];
  for await (const chunk of stream) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks);
}

function servirArquivo(res, baseDir, arquivoRelativo) {
  const caminho = resolve(baseDir, arquivoRelativo);
  if (!caminho.startsWith(`${baseDir}\\`) && caminho !== baseDir) return responderErro(res, 403, "Acesso negado.");
  if (!existsSync(caminho)) return responderErro(res, 404, "Arquivo nao encontrado.");
  res.writeHead(200, { "Content-Type": MIME_TYPES[extname(caminho).toLowerCase()] ?? "application/octet-stream" });
  createReadStream(caminho).on("error", () => responderErro(res, 500, "Nao foi possivel ler o arquivo.")).pipe(res);
}

function lerJson(req) {
  return new Promise((resolvePayload, rejectPayload) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) req.destroy(new Error("Payload excede 1MB."));
    });
    req.on("end", () => {
      try { resolvePayload(body ? JSON.parse(body) : {}); } catch (error) { rejectPayload(error); }
    });
    req.on("error", rejectPayload);
  });
}

async function responderJson(res, payload) {
  res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function responderErro(res, status, mensagem) {
  if (res.headersSent) return res.destroy();
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify({ erro: mensagem }));
}
