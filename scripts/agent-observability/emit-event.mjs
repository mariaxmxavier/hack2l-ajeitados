import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const eventsPath = resolve(projectRoot, '.agent-observability/events.jsonl')
const statePath = resolve(projectRoot, '.agent-observability/state.json')

const eventTypes = new Set([
  'session_start', 'route_decision', 'agent_spawn', 'agent_status',
  'agent_complete', 'agent_failed', 'task_assign', 'tool_start', 'tool_end',
  'handoff', 'gate_enter', 'gate_result', 'dependency_wait', 'bead_update',
  'session_end',
])

function parseArgs(args) {
  const values = {}
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index]
    if (!arg.startsWith('--')) continue
    const key = arg.slice(2)
    values[key] = args[index + 1]?.startsWith('--') ? true : args[++index]
  }
  return values
}

const [type, ...rawArgs] = process.argv.slice(2)
const args = parseArgs(rawArgs)
if (!eventTypes.has(type)) throw new Error(`Unsupported event type: ${type ?? '<missing>'}`)

const sessionId = args.session ?? process.env.AGENT_SESSION_ID
const agentId = args.agent ?? process.env.AGENT_ID
if (!sessionId || !agentId) throw new Error('Both --session and --agent are required')

const event = {
  version: 1,
  timestamp: new Date().toISOString(),
  type,
  sessionId,
  agentId,
  ...(args.parent ? { parentAgentId: args.parent } : {}),
  ...(args.target ? { targetAgentId: args.target } : {}),
  ...(args.role ? { targetRole: args.role } : {}),
  ...(args.bead ? { beadId: args.bead } : {}),
  ...(args.phase ? { phase: args.phase } : {}),
  ...(args.task ? { task: args.task } : {}),
  ...(args.reason ? { reason: args.reason } : {}),
  ...(args.runtime ? { runtime: args.runtime } : {}),
  metadata: args.metadata ? JSON.parse(args.metadata) : {},
}

await mkdir(dirname(eventsPath), { recursive: true })
await appendFile(eventsPath, `${JSON.stringify(event)}\n`, 'utf8')
const state = await readFile(statePath, 'utf8')
  .then((value) => JSON.parse(value))
  .catch((error) => {
    if (error.code === 'ENOENT') return { version: 1 }
    throw new Error(`Unable to read observability state: ${error.message}`)
  })
state.version = 1
state.lastEventTimestamp = event.timestamp
state.lastSessionId = event.sessionId
await writeFile(statePath, `${JSON.stringify(state, null, 2)}\n`, 'utf8')
process.stdout.write(`${JSON.stringify(event)}\n`)
