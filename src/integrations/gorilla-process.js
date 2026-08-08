import "dotenv/config";
import { mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawn } from "node:child_process";

export async function runGorillaSearch(query, {
  responsePath = process.env.GORILLA_OFFLINE === "0"
    ? null
    : (process.env.GORILLA_OFFLINE_RESPONSE ? resolve(process.env.GORILLA_OFFLINE_RESPONSE) : resolve("gorilla/templates/response/response_poll_completed.json")),
  python = process.env.PYTHON_BIN ?? "python",
  timeoutMs = Number(process.env.GORILLA_TIMEOUT_MS ?? 120_000),
  keepArtifacts = false
} = {}) {
  const workDir = await mkdtemp(join(tmpdir(), "ajeitados-gorilla-"));
  const requestPath = join(workDir, "request.json");
  const outputDir = join(workDir, "pipeline");
  const rawOutputDir = join(workDir, "raw");
  await writeFile(requestPath, JSON.stringify({
    query: String(query).slice(0, 500), mode: "ranked", since: "30d", limit: 50, sources: ["reddit", "twitter"]
  }, null, 2));
  const args = ["gorilla/main.py", "--request", requestPath, "--output", outputDir, "--raw-output-dir", rawOutputDir];
  if (responsePath) args.push("--response", responsePath);
  const result = await execute(python, args, { timeoutMs });
  let payload;
  try {
    const start = result.stdout.indexOf("{");
    const end = result.stdout.lastIndexOf("}");
    payload = JSON.parse(start >= 0 && end > start ? result.stdout.slice(start, end + 1) : "{}");
  } catch (error) {
    throw new Error(`Gorilla não retornou JSON válido: ${error.message}; stderr=${result.stderr}`);
  }
  if (result.code !== 0 || !payload.quality_gate || payload.quality_gate.status !== "passed") {
    throw new Error(`Gorilla falhou: ${result.stderr || result.stdout}`);
  }
  return { ...payload, bundlePath: resolve(payload.okf_bundle ?? payload.pkf_bundle), workDir, stderr: result.stderr, keepArtifacts };
}

function execute(command, args, { timeoutMs }) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, { stdio: ["ignore", "pipe", "pipe"], windowsHide: true });
    let stdout = "";
    let stderr = "";
    const timer = setTimeout(() => { child.kill(); reject(new Error(`Gorilla excedeu timeout de ${timeoutMs}ms`)); }, timeoutMs);
    child.stdout.on("data", (chunk) => { stdout += chunk; });
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("error", (error) => { clearTimeout(timer); reject(error); });
    child.on("close", (code) => { clearTimeout(timer); resolvePromise({ code: code ?? 1, stdout, stderr }); });
  });
}
