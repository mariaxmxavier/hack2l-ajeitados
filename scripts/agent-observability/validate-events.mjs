import { readFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const path = resolve(root, '.agent-observability/events.jsonl')
const allowedTypes = new Set([
  'session_start', 'route_decision', 'agent_spawn', 'agent_status',
  'agent_complete', 'agent_failed', 'task_assign', 'tool_start', 'tool_end',
  'handoff', 'gate_enter', 'gate_result', 'dependency_wait', 'bead_update',
  'session_end',
])

const content = await readFile(path, 'utf8').catch((error) => {
  if (error.code === 'ENOENT') return ''
  throw error
})
const errors = []
for (const [index, line] of content.split(/\r?\n/).filter(Boolean).entries()) {
  try {
    const event = JSON.parse(line)
    if (event.version !== 1) errors.push(`line ${index + 1}: version must be 1`)
    if (!allowedTypes.has(event.type)) errors.push(`line ${index + 1}: unsupported type`)
    if (!event.sessionId || !event.agentId) errors.push(`line ${index + 1}: sessionId and agentId are required`)
    if (Number.isNaN(Date.parse(event.timestamp))) errors.push(`line ${index + 1}: invalid timestamp`)
    for (const field of ['sessionId', 'agentId', 'parentAgentId', 'targetAgentId', 'targetRole', 'beadId', 'phase', 'task', 'reason', 'runtime']) {
      if (event[field] !== undefined && typeof event[field] !== 'string') {
        errors.push(`line ${index + 1}: ${field} must be a string`)
      }
    }
    if (event.metadata !== undefined && event.metadata !== null) {
      if (typeof event.metadata !== 'object' || Array.isArray(event.metadata)) {
        errors.push(`line ${index + 1}: metadata must be an object`)
      }
    }
    if (event.runtime !== undefined && !['claude', 'codex', 'gemini', 'copilot'].includes(event.runtime)) {
      errors.push(`line ${index + 1}: unsupported runtime`)
    }
  } catch (error) {
    errors.push(`line ${index + 1}: ${error.message}`)
  }
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exitCode = 1
} else {
  console.log(`PASS: ${content.split(/\r?\n/).filter(Boolean).length} observability events validated`)
}
