import { spawn } from 'node:child_process'

const eventType = process.env.COPILOT_HOOK_EVENT ?? 'agent_status'
let input = ''
process.stdin.setEncoding('utf8')
process.stdin.on('data', (chunk) => { input += chunk })
process.stdin.on('end', () => {
  let payload = {}
  try { payload = input ? JSON.parse(input) : {} } catch { payload = { raw: input } }
  const session = payload.sessionId ?? process.env.AGENT_SESSION_ID ?? `hook-${Date.now()}`
  const agent = payload.agentId ?? process.env.AGENT_ID ?? 'preto-velho'
  const args = [eventType, '--session', session, '--agent', agent, '--runtime', 'copilot', '--metadata', JSON.stringify(payload)]
  const child = spawn(process.execPath, ['scripts/agent-observability/emit-event.mjs', ...args], { stdio: ['ignore', 'ignore', 'ignore'] })
  child.on('error', () => {})
  child.on('exit', () => process.exit(0))
})
