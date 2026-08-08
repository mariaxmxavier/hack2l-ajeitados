import { Annotation, END, START, StateGraph } from "@langchain/langgraph";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { rm } from "node:fs/promises";
import { processarConversaWhatsapp } from "../legacy/old/orquestracao.js";
import { runGorillaSearch } from "../integrations/gorilla-process.js";
import {
  cleanupDirectory,
  documentFromConversation,
  ensureOkfRootIndexed,
  openKnowledgeIndex,
  readOkfDirectory,
  removeNamespace,
  retrieve,
  upsertDocuments
} from "../knowledge/index.js";

const Estado = Annotation.Root({
  mensagens: Annotation({ reducer: (_, next) => next, default: () => [] }),
  conversationId: Annotation({ reducer: (_, next) => next, default: () => "conversa-padrao" }),
  resultadoProcessamento: Annotation({ reducer: (_, next) => next, default: () => null }),
  query: Annotation({ reducer: (_, next) => next, default: () => "" }),
  gorilla: Annotation({ reducer: (_, next) => next, default: () => null }),
  gorillaError: Annotation({ reducer: (_, next) => next, default: () => null }),
  dynamicNamespace: Annotation({ reducer: (_, next) => next, default: () => null }),
  retrieval: Annotation({ reducer: (_, next) => next, default: () => [] }),
  risk: Annotation({ reducer: (_, next) => next, default: () => null }),
  decision: Annotation({ reducer: (_, next) => next, default: () => null }),
  errors: Annotation({ reducer: (_, next) => next, default: () => [] }),
  temporaryDir: Annotation({ reducer: (_, next) => next, default: () => null }),
  options: Annotation({ reducer: (_, next) => next, default: () => ({}) }),
  status: Annotation({ reducer: (_, next) => next, default: () => "running" })
});

async function ingest(state) {
  const processed = await processarConversaWhatsapp(state.mensagens);
  const entries = processed.resultadoAgente?.entradas ?? [];
  return {
    resultadoProcessamento: processed.resultadoAgente,
    conversationId: entries[0]?.conversaId ?? state.mensagens[0]?.conversaId ?? "conversa-padrao",
    query: entries.map((entry) => entry.texto).filter(Boolean).join("\n") || "análise de golpes em pagamentos digitais"
  };
}

async function searchGorilla(state) {
  try {
    const gorilla = await runGorillaSearch(state.query, state.options);
    return { gorilla, temporaryDir: gorilla.workDir };
  } catch (error) {
    return { gorillaError: error.message, errors: [error.message] };
  }
}

async function retrieveAndDecide(state) {
  const runId = state.options.runId ?? `run-${Date.now()}`;
  const dynamicNamespace = `dynamic:${runId}`;
  const db = openKnowledgeIndex(state.options.dbPath ?? resolve("data/index/knowledge.sqlite"));
  try {
    const reviewedRoots = (state.options.reviewedRoots ?? [resolve("knowledge/reviewed")]).filter(existsSync);
    for (const root of reviewedRoots) await ensureOkfRootIndexed(db, root, "reviewed");
    if (state.gorilla?.bundlePath && existsSync(state.gorilla.bundlePath)) {
      upsertDocuments(db, await readOkfDirectory(state.gorilla.bundlePath, dynamicNamespace));
    }
    const hits = retrieve(db, state.query, {
      // Empty namespaces intentionally searches reviewed, conversation and
      // the current dynamic run in the same physical index.
      namespaces: [],
      topK: state.options.topK ?? 8,
      excludeConversationId: state.conversationId
    });
    const risk = assessRisk(hits, state.gorillaError);
    const decision = decide(risk, state.gorillaError, state.options.riskThreshold);
    const conversation = documentFromConversation(state.conversationId, state.resultadoProcessamento?.entradas ?? []);
    upsertDocuments(db, [conversation]);
    return { dynamicNamespace, retrieval: hits, risk, decision, status: decision.action === "escalar" && state.gorillaError ? "degraded" : "completed" };
  } finally {
    removeNamespace(db, dynamicNamespace);
    db.close();
  }
}

function assessRisk(hits, gorillaError) {
  const strongest = hits[0]?.score ?? 0;
  const signals = hits.filter((hit) => /scam|phishing|fraud|golpe|spam|suspected/i.test(`${hit.title} ${hit.content}`)).length;
  const riskScore = Math.min(1, strongest * 0.75 + Math.min(signals, 3) * 0.08);
  return {
    riskScore: Number(riskScore.toFixed(3)),
    classification: riskScore >= 0.75 ? "likely_scam" : riskScore >= 0.45 ? "suspicious" : "insufficient_evidence",
    evidenceCount: hits.length,
    signals,
    degraded: Boolean(gorillaError)
  };
}

function decide(risk, gorillaError, configuredThreshold) {
  const threshold = Number.isFinite(configuredThreshold)
    ? Math.min(0.95, Math.max(0.45, configuredThreshold))
    : 0.75;
  const action = gorillaError
    ? "escalar"
    : risk.riskScore >= threshold
      ? "pausar"
      : risk.riskScore >= 0.45
        ? "escalar"
        : "liberar";
  return {
    action,
    riskScore: risk.riskScore,
    classification: risk.classification,
    threshold,
    reasons: [gorillaError ? "Gorilla indisponível; execução degradada." : null, `Encontradas ${risk.evidenceCount} evidências recuperadas.`, `Sinais antifraude: ${risk.signals}.`].filter(Boolean),
    recommendedAction: action === "pausar"
      ? "Não prosseguir e revisar evidências."
      : action === "escalar"
        ? "Escalar para revisão humana."
        : "Nenhuma intervenção necessária; manter monitoramento."
  };
}

async function cleanup(state) {
  if (state.temporaryDir && !state.options.keepArtifacts) await cleanupDirectory(state.temporaryDir);
  return { status: state.status };
}

const workflow = new StateGraph(Estado)
  .addNode("ingest", ingest)
  .addNode("gorilla_search", searchGorilla)
  .addNode("retrieve_and_decide", retrieveAndDecide)
  .addNode("cleanup", cleanup)
  .addEdge(START, "ingest")
  .addEdge("ingest", "gorilla_search")
  .addEdge("gorilla_search", "retrieve_and_decide")
  .addEdge("retrieve_and_decide", "cleanup")
  .addEdge("cleanup", END);

export const grafoAntifraude = workflow.compile();

export async function executarPipelineAntifraude(mensagens, options = {}) {
  const result = await grafoAntifraude.invoke({ mensagens, options });
  return { ...result, runId: options.runId, pipeline: "antifraude" };
}
