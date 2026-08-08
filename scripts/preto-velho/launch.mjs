import { spawn } from 'node:child_process';

const command = process.platform === 'win32' ? 'copilot.cmd' : 'copilot';
const child = spawn(command, ['--agent=preto-velho', ...process.argv.slice(2)], {
  stdio: 'inherit', env: process.env,
});
child.on('error', (error) => { console.error(`Unable to start ${command}: ${error.message}`); process.exitCode = 1; });
child.on('exit', (code, signal) => { process.exitCode = code ?? (signal ? 1 : 0); });
