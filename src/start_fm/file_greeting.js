import process from 'process';
import { fork  } from "child_process";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.parse(__dirname).dir;
const path_command = path.join(root, 'function', 'command.js');

export const helloFile = (name) => {
    setTimeout(() => {
        process.stdout.write(`Welcome to the File Manager, ${name}!\n\n`);
    });
    setTimeout(() => {
        process.stdout.write(`You are currently in path: ${1}\n
Enter command or "help" for a list of commands: `);
        fork(path_command);
    }, 1000);
};