import fs from 'fs';
import { start, last } from '../start_fm/start_path.js';

export const check = async (pathNext) => {
    
    fs.access(pathNext, (error) => {
        if (error) {
            process.stdout.write('> PATH NOT CORRECT <\n');
            process.stdout.write(`You are currently in path: ${start()}\n
Enter command or "help" for a list of commands: `);
            return;
        }
        last(pathNext);
        process.stdout.write(`You are currently in path: ${pathNext}\n
Enter command or "help" for a list of commands: `);
    });
} 
