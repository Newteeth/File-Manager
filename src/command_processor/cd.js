import process from 'process';
import { lastDirectory } from '../start_fm/path_generator.js';
import { start } from '../start_fm/start_path.js';
import { check } from '../function/check_path.js';

export const cd = async (path_jump) => {
    const start_trace = start();    
    try {
        const path_next = lastDirectory(start_trace, path_jump);
        check(path_next);
    }
    catch {
        process.stdout.write(`Error...`);
    }    
}
