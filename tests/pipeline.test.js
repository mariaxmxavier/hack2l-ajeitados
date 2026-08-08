import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parseOkf, openKnowledgeIndex, retrieve, toDocument, upsertDocuments } from "../src/knowledge/index.js";
import { executarPipelineAntifraude } from "../src/pipeline/antifraude.js";
import { createDemoServer } from "../src/demo-server.js";

test("parseOkf preserva metadados e conteúdo", () => {
  const parsed = parseOkf("---\ntype: scam-evidence\ntags:\n  - pix\n  - phishing\n---\n\n# Evidência\n");
  assert.equal(parsed.type, "scam-evidence");
  assert.deepEqual(parsed.metadata.tags, ["pix", "phishing"]);
  assert.match(parsed.content, /Evidência/);
});

test("índice unificado recupera documentos com proveniência", async () => {
  const root = await mkdtemp(join(tmpdir(), "ajeitados-test-"));
  const db = openKnowledgeIndex(join(root, "knowledge.sqlite"));
  const doc = toDocument({ title: "Golpe Pix", type: "scam" }, { namespace: "reviewed", sourceType: "okf", sourcePath: "golpe.md", content: "Solicitação urgente de Pix para conta desconhecida.", metadata: { confidence: 0.9 } });
  upsertDocuments(db, [doc]);
  const hits = retrieve(db, "golpe Pix urgente", { namespaces: ["reviewed"] });
  assert.equal(hits[0].sourceType, "okf");
  assert.equal(hits[0].namespace, "reviewed");
  db.close();
});

test("pipeline offline executa Gorilla, RAG e decisão", async () => {
  const root = await mkdtemp(join(tmpdir(), "ajeitados-pipeline-"));
  const reviewed = join(root, "reviewed");
  await (await import("node:fs/promises")).mkdir(reviewed, { recursive: true });
  await writeFile(join(reviewed, "scam.md"), "---\ntype: scam\ntitle: Golpe Pix\n---\n\nGolpe Pix com pedido urgente.");
  const result = await executarPipelineAntifraude([{ id: "m1", conversaId: "test", autor: "cliente", tipo: "texto", conteudo: "Recebi um pedido urgente de Pix.", timestamp: new Date().toISOString() }], {
    dbPath: join(root, "index.sqlite"), reviewedRoots: [reviewed], runId: "test-run"
  });
  assert.equal(result.status, "completed");
  assert.equal(result.gorilla.quality_gate.status, "passed");
  assert.ok(result.retrieval.length > 0);
  assert.ok(["pausar", "escalar"].includes(result.decision.action));
  const bundlePath = result.gorilla.bundlePath;
  assert.equal(await fileExists(bundlePath), false, "artefato temporário deve ser removido");
});

test("fixture Gorilla gera investigação agentica auditável antes do OKF", async () => {
  const root = await mkdtemp(join(tmpdir(), "ajeitados-agentic-"));
  const result = await executarPipelineAntifraude([
    { id: "agentic-1", conversaId: "agentic", autor: "cliente", tipo: "texto", conteudo: "Recebi um pedido urgente de Pix.", timestamp: new Date().toISOString() }
  ], {
    dbPath: join(root, "index.sqlite"),
    reviewedRoots: [],
    runId: "agentic-run",
    keepArtifacts: true
  });
  try {
    const bundlePath = result.gorilla.bundlePath;
    const state = JSON.parse(await readFile(join(bundlePath, "state.json"), "utf8"));
    const manifest = JSON.parse(await readFile(join(bundlePath, "okf.json"), "utf8"));
    const roleNames = state.agent_results.map((item) => item.agent);

    assert.equal(state.schema_version, "1.0");
    assert.match(state.raw_response_sha256, /^[a-f0-9]{64}$/);
    assert.equal(state.raw_response_json, JSON.stringify(JSON.parse(state.raw_response_json)));
    assert.deepEqual(roleNames, ["research", "entity", "pattern", "replication", "validation", "judge"]);
    assert.equal(state.checkpoints.length, 6);
    assert.equal(state.entities[0]?.type, "url");
    assert.equal(state.entities[0]?.evidence_id, "ev_001");
    assert.ok(state.audit_events.some((event) => event.event === "investigation_started" && event.agent === "preto-velho"));
    assert.equal(manifest.agentic_investigation.orchestrator, "preto-velho");
    assert.equal(manifest.quality_gate.status, "passed");
  } finally {
    await rm(result.gorilla?.workDir, { recursive: true, force: true });
  }
});

test("API do mockup executa a pipeline oficial e registra uma acao", async (t) => {
  const server = createDemoServer();
  await new Promise((resolveListen) => server.listen(0, "127.0.0.1", resolveListen));
  t.after(() => server.close());
  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;

  const health = await fetch(`${baseUrl}/api/health`).then((response) => response.json());
  assert.equal(health.pipeline, "antifraude");
  const events = await fetch(`${baseUrl}/api/demo-events`).then((response) => response.json());
  assert.equal(events[0].mensagem.audioUrl, "/audios/1.mp4");
  const audio = await fetch(`${baseUrl}${events[0].mensagem.audioUrl}`);
  assert.equal(audio.status, 200);
  assert.match(audio.headers.get("content-type"), /audio\/mp4/);
  const missingAudio = await fetch(`${baseUrl}/audios/inexistente.mp4`);
  assert.equal(missingAudio.status, 404);

  const response = await fetch(`${baseUrl}/api/analisar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      threshold: 0.7,
      mensagens: [{
        id: "mockup-1",
        conversaId: "mockup-test",
        autor: "cliente",
        tipo: "texto",
        conteudo: "Faca um Pix urgente para esta chave e nao conte para ninguem.",
        timestamp: new Date().toISOString()
      }]
    })
  });
  const payload = await response.json();
  assert.equal(response.status, 200);
  assert.equal(payload.pipeline.pipeline, "antifraude");
  assert.ok(payload.pipeline.retrieval.length > 0);
  assert.ok(payload.fraude.pontuacao.sinais.includes("pedido de Pix ou devolucao"));
  assert.equal(payload.orchestrator.controller, "preto-velho");
  assert.equal(payload.orchestrator.mode, "deterministic");
  assert.equal(payload.orchestrator.steps.length, 6);
  assert.equal(payload.orchestrator.steps[1].agent, "gorilla_search");

  const action = await fetch(`${baseUrl}/api/acoes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ runId: payload.pipeline.runId, action: "bloquear_contato" })
  }).then((result) => result.json());
  assert.equal(action.status, "registrada");
  assert.equal(action.simulated, true);
});

async function fileExists(path) {
  try { await readFile(join(path, "index.md")); return true; } catch { return false; }
}
