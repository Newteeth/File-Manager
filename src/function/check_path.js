import fs from 'fs';
import { start, last } from '../start_fm/start_path.js';

export const check = async (path_next) => {
    fs.access(path_next, (error) => {
        if (error) {
            process.stdout.write('> PATH NOT CORRECT <\n');
            process.stdout.write(`You are currently in path: ${start()}\n
Enter command or "help" for a list of commands: `);
            return;
        }
        last(path_next);
        process.stdout.write(`You are currently in path: ${path_next}\n
Enter command or "help" for a list of commands: `);         
    });
} 
