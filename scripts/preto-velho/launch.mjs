import { spawn } from 'node:child_process';

const command = process.platform === 'win32' ? 'copilot.cmd' : 'copilot';
const prompt = process.argv.slice(2).join(' ').trim();
const args = ['--agent', 'preto-velho', '-p', prompt || 'Execute a validação do trabalho atual.'];
const commandLine = process.platform === 'win32'
  ? [command, ...args.map((value) => `"${String(value).replaceAll('"', '\\"')}"`)].join(' ')
  : command;
const child = process.platform === 'win32'
  ? spawn(commandLine, { stdio: 'inherit', env: process.env, shell: true })
  : spawn(command, args, { stdio: 'inherit', env: process.env });
child.on('error', (error) => { console.error(`Unable to start ${command}: ${error.message}`); process.exitCode = 1; });
child.on('exit', (code, signal) => { process.exitCode = code ?? (signal ? 1 : 0); });
