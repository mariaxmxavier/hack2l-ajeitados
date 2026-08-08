import { createHash } from "node:crypto";
import { existsSync, statSync } from "node:fs";
import { mkdirSync as makeDirectorySync } from "node:fs";
import { readdir, readFile, mkdir, rm } from "node:fs/promises";
import { dirname, extname, join, relative, resolve } from "node:path";
import { DatabaseSync } from "node:sqlite";

const DIMENSIONS = 128;

export function openKnowledgeIndex(dbPath = resolve("data/index/knowledge.sqlite")) {
  makeDirectorySync(dirname(dbPath), { recursive: true });
  const db = new DatabaseSync(dbPath);
  db.exec(`
    CREATE TABLE IF NOT EXISTS documents (
      id TEXT PRIMARY KEY,
      namespace TEXT NOT NULL,
      source_type TEXT NOT NULL,
      source_path TEXT NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      metadata_json TEXT NOT NULL DEFAULT '{}',
      embedding_json TEXT NOT NULL,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE INDEX IF NOT EXISTS idx_documents_namespace ON documents(namespace);
    CREATE VIRTUAL TABLE IF NOT EXISTS documents_fts USING fts5(document_id UNINDEXED, title, content);
    CREATE TABLE IF NOT EXISTS index_sources (root TEXT PRIMARY KEY, namespace TEXT NOT NULL, signature TEXT NOT NULL, updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP);
  `);
  return db;
}

export async function openKnowledgeIndexAsync(dbPath = resolve("data/index/knowledge.sqlite")) {
  await mkdir(dirname(dbPath), { recursive: true });
  return openKnowledgeIndexWithoutParent(dbPath);
}

function openKnowledgeIndexWithoutParent(dbPath) {
  const db = new DatabaseSync(dbPath);
  db.exec(`
    CREATE TABLE IF NOT EXISTS documents (
      id TEXT PRIMARY KEY,
      namespace TEXT NOT NULL,
      source_type TEXT NOT NULL,
      source_path TEXT NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      metadata_json TEXT NOT NULL DEFAULT '{}',
      embedding_json TEXT NOT NULL,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE INDEX IF NOT EXISTS idx_documents_namespace ON documents(namespace);
    CREATE VIRTUAL TABLE IF NOT EXISTS documents_fts USING fts5(document_id UNINDEXED, title, content);
  `);
  return db;
}

export async function readOkfDirectory(root, namespace = "reviewed") {
  const files = await listMarkdownFiles(root);
  const documents = [];
  for (const file of files) {
    const source = await readFile(file, "utf8");
    const parsed = parseOkf(source);
    documents.push(toDocument(parsed, {
      namespace,
      sourceType: "okf",
      sourcePath: file,
      content: parsed.content,
      metadata: { relativePath: relative(root, file) }
    }));
  }
  return documents;
}

export async function ensureOkfRootIndexed(db, root, namespace = "reviewed") {
  const files = await listMarkdownFiles(root);
  const signature = files.map((file) => {
    const stat = statSync(file);
    return `${file}:${stat.size}:${stat.mtimeMs}`;
  }).join("|");
  const previous = db.prepare("SELECT signature FROM index_sources WHERE root = ? AND namespace = ?").get(root, namespace);
  if (previous?.signature === signature) return { indexed: false, files: files.length };
  const documents = [];
  for (const file of files) {
    const parsed = parseOkf(await readFile(file, "utf8"));
    documents.push(toDocument(parsed, { namespace, sourceType: "okf", sourcePath: file, content: parsed.content, metadata: { relativePath: relative(root, file) } }));
  }
  upsertDocuments(db, documents);
  db.prepare("INSERT INTO index_sources(root, namespace, signature) VALUES (?, ?, ?) ON CONFLICT(root) DO UPDATE SET namespace=excluded.namespace, signature=excluded.signature, updated_at=CURRENT_TIMESTAMP").run(root, namespace, signature);
  return { indexed: true, files: files.length };
}

export function parseOkf(source) {
  const text = String(source);
  if (!text.startsWith("---")) {
    return { metadata: {}, content: text, title: "Documento OKF", type: "document" };
  }
  const end = text.indexOf("\n---", 3);
  if (end < 0) throw new Error("OKF sem fechamento do YAML front matter");
  const metadata = parseSimpleYaml(text.slice(3, end));
  const content = text.slice(end + 4).replace(/^\r?\n/, "");
  return {
    metadata,
    content,
    title: String(metadata.title ?? "Documento OKF"),
    type: String(metadata.type ?? "document")
  };
}

function parseSimpleYaml(block) {
  const metadata = {};
  let currentList = null;
  for (const line of block.split(/\r?\n/)) {
    const list = line.match(/^\s*-\s+(.+)$/);
    if (list && currentList) {
      metadata[currentList].push(stripYamlValue(list[1]));
      continue;
    }
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) continue;
    const [, key, raw] = match;
    if (!raw) {
      metadata[key] = [];
      currentList = key;
      continue;
    }
    currentList = null;
    metadata[key] = stripYamlValue(raw);
  }
  return metadata;
}

function stripYamlValue(value) {
  const trimmed = String(value).trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed);
  return trimmed;
}

export function toDocument(parsed, { namespace, sourceType, sourcePath = "", content, metadata = {} }) {
  const body = `${parsed.title}\n${content}`;
  const id = createHash("sha1").update(`${namespace}\0${sourcePath}\0${body}`).digest("hex");
  return {
    id,
    namespace,
    sourceType,
    sourcePath,
    title: parsed.title,
    content,
    metadata: { ...parsed.metadata, ...metadata, type: parsed.type }
  };
}

export function upsertDocuments(db, documents) {
  const insert = db.prepare(`
    INSERT INTO documents (id, namespace, source_type, source_path, title, content, metadata_json, embedding_json)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      namespace=excluded.namespace, source_type=excluded.source_type, source_path=excluded.source_path,
      title=excluded.title, content=excluded.content, metadata_json=excluded.metadata_json,
      embedding_json=excluded.embedding_json, updated_at=CURRENT_TIMESTAMP
  `);
  const deleteFts = db.prepare("DELETE FROM documents_fts WHERE document_id = ?");
  const insertFts = db.prepare("INSERT INTO documents_fts (document_id, title, content) VALUES (?, ?, ?)");
  const existing = db.prepare("SELECT content, metadata_json FROM documents WHERE id = ?");
  db.exec("BEGIN");
  try {
    for (const document of documents) {
      const current = existing.get(document.id);
      if (current && current.content === (document.content ?? "") && current.metadata_json === JSON.stringify(document.metadata ?? {})) continue;
      insert.run(document.id, document.namespace, document.sourceType, document.sourcePath ?? "", document.title ?? "Documento", document.content ?? "", JSON.stringify(document.metadata ?? {}), JSON.stringify(embed(`${document.title}\n${document.content}`)));
      deleteFts.run(document.id);
      insertFts.run(document.id, document.title ?? "", document.content ?? "");
    }
    db.exec("COMMIT");
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
}

export function removeNamespace(db, namespace) {
  const ids = db.prepare("SELECT id FROM documents WHERE namespace = ?").all(namespace);
  const removeFts = db.prepare("DELETE FROM documents_fts WHERE document_id = ?");
  for (const { id } of ids) removeFts.run(id);
  db.prepare("DELETE FROM documents WHERE namespace = ?").run(namespace);
}

export function retrieve(db, query, { namespaces = [], topK = 8, excludeConversationId } = {}) {
  const conditions = [];
  const args = [];
  if (namespaces.length) {
    conditions.push(`namespace IN (${namespaces.map(() => "?").join(",")})`);
    args.push(...namespaces);
  }
  if (excludeConversationId) {
    conditions.push("NOT (namespace = ?)");
    args.push(`conversation:${excludeConversationId}`);
  }
  const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
  const rows = db.prepare(`SELECT * FROM documents ${where}`).all(...args);
  const queryEmbedding = embed(query);
  const terms = tokenize(query);
  const hits = rows.map((row) => {
    const content = `${row.title}\n${row.content}`;
    const searchable = content.toLowerCase();
    const lexical = terms.length ? terms.filter((term) => searchable.includes(term)).length / terms.length : 0;
    const vector = cosine(queryEmbedding, JSON.parse(row.embedding_json));
    return {
      id: row.id,
      namespace: row.namespace,
      sourceType: row.source_type,
      sourcePath: row.source_path,
      title: row.title,
      content: row.content,
      metadata: JSON.parse(row.metadata_json),
      lexicalScore: lexical,
      vectorScore: vector,
      score: 0.4 * lexical + 0.6 * vector
    };
  }).sort((a, b) => b.score - a.score);
  const seen = new Set();
  return hits.filter((hit) => {
    const key = hit.content.replace(/\s+/g, " ").trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, topK);
}

export function documentFromConversation(conversationId, entries) {
  const content = entries.map((entry) => `[${entry.timestamp ?? ""}] ${entry.autor ?? "desconhecido"}: ${entry.texto ?? entry.conteudo ?? ""}`).join("\n");
  return toDocument({ title: `Conversa ${conversationId}`, type: "conversation", metadata: {} }, {
    namespace: `conversation:${conversationId}`,
    sourceType: "conversation",
    sourcePath: `conversation:${conversationId}`,
    content,
    metadata: { conversationId }
  });
}

async function listMarkdownFiles(root) {
  if (!existsSync(root)) return [];
  const result = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    const path = join(root, entry.name);
    if (entry.isDirectory()) result.push(...await listMarkdownFiles(path));
    else if (extname(entry.name).toLowerCase() === ".md") result.push(path);
  }
  return result;
}

function tokenize(text) {
  return String(text).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().match(/[a-z0-9]+/g) ?? [];
}

function embed(text) {
  const vector = new Array(DIMENSIONS).fill(0);
  for (const token of tokenize(text)) {
    let hash = 2166136261;
    for (let index = 0; index < token.length; index += 1) {
      hash ^= token.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    vector[(hash >>> 0) % DIMENSIONS] += 1;
  }
  const norm = Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0));
  return norm ? vector.map((value) => value / norm) : vector;
}

function cosine(a, b) {
  return a.reduce((sum, value, index) => sum + value * (b[index] ?? 0), 0);
}

export async function cleanupDirectory(path) {
  if (path) await rm(path, { recursive: true, force: true });
}
