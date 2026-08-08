import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)
const beadsCommand = process.platform === 'win32' ? 'bd.cmd' : 'bd'

async function read(command, args) {
  const { stdout } = await execFileAsync(command, args, {
    windowsHide: true,
    maxBuffer: 10 * 1024 * 1024,
    shell: process.platform === 'win32',
  })
  try {
    return JSON.parse(stdout)
  } catch (error) {
    throw new Error(`Beads returned invalid JSON for ${args.join(' ')}: ${error.message}`)
  }
}

function normalize(issue) {
  return {
    id: issue.id,
    title: issue.title,
    status: issue.status,
    dependencies: issue.dependencies ?? [],
    blockers: issue.blockers ?? [],
    assignedAgent: issue.assignee ?? null,
    phase: issue.phase ?? null,
  }
}

const [issues, ready, blocked] = await Promise.all([
  read(beadsCommand, ['list', '--json']),
  read(beadsCommand, ['ready', '--json']),
  read(beadsCommand, ['blocked', '--json']),
])

const normalizeList = (value, name) => {
  if (!Array.isArray(value)) throw new Error(`Beads ${name} response must be an array`)
  return value.map(normalize)
}

const result = {
  beads: normalizeList(issues, 'list'),
  ready: normalizeList(ready, 'ready'),
  blocked: normalizeList(blocked, 'blocked'),
}
process.stdout.write(`${JSON.stringify(result, null, 2)}\n`)
