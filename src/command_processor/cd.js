import process from 'process';
import { lastDirectory } from '../start_fm/path_generator.js';
import { start, last } from '../start_fm/start_path.js';

export const cd = (path_jump) => {
    const start_trace = start();
    try {  
        const path_next = lastDirectory(start_trace, path_jump);
        last(path_next);
        process.stdout.write(`You are currently in path: ${path_next}\n
Enter command or "help" for a list of commands: `);
    }
    catch {
        process.stdout.write(`Error...`);
    }    
}
