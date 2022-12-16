import process from 'process';
import { start } from './start_path.js';
import { commander_one } from '../function/command_1.js';

export const helloFile = (name) => {
    setTimeout(() => {
        process.stdout.write(`Welcome to the File Manager, ${name}!\n\n`);
    });
    setTimeout(() => {
        process.stdout.write(`You are currently in path: ${start()}\n
Enter command or "help" for a list of commands: `);
        process.stdin.on('data', commander_one);
        
    }, 1000);
};