import "dotenv/config";
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { executarPipelineAntifraude } from "../pipeline/antifraude.js";

export async function carregarMensagens(path) {
  const payload = JSON.parse(await readFile(path, "utf8"));
  if (!Array.isArray(payload)) throw new Error("O arquivo de conversa precisa conter uma lista JSON.");
  return payload.map((item) => item.mensagem ?? item);
}

export async function main(args = process.argv.slice(2)) {
  const input = args[0] ?? "data/conversa-simulada.json";
  const mensagens = await carregarMensagens(input);
  const resultado = await executarPipelineAntifraude(mensagens, {
    runId: process.env.PIPELINE_RUN_ID ?? `offline-${Date.now()}`,
    keepArtifacts: process.env.PIPELINE_KEEP_ARTIFACTS === "1"
  });
  console.log(JSON.stringify({
    pipeline: resultado.pipeline,
    runId: resultado.runId,
    status: resultado.status,
    query: resultado.query,
    gorilla: resultado.gorilla ? { searchId: resultado.gorilla.search_id, qualityGate: resultado.gorilla.quality_gate } : null,
    gorillaError: resultado.gorillaError,
    risk: resultado.risk,
    decision: resultado.decision,
    retrieval: (resultado.retrieval ?? []).map(({ id, namespace, sourceType, title, score, metadata }) => ({ id, namespace, sourceType, title, score, metadata }))
  }, null, 2));
  return resultado;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    await main();
  } catch (error) {
    console.error(error.stack ?? error.message);
    process.exitCode = 1;
  }
}
