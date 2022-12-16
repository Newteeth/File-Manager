import fs from 'fs';
import process from 'process';
import { lastDirectory } from '../start_fm/path_generator.js';
import { start, last } from '../start_fm/start_path.js';

export const cd = async (path_jump) => {
    const start_trace = start();    
    try {
        const path_next = lastDirectory(start_trace, path_jump);
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
    catch {
        process.stdout.write(`Error...`);
    }    
}
