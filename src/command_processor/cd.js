import process from 'process';
import { lastDirectory } from '../start_fm/path_generator.js';
import { start } from '../start_fm/start_path.js';
import { check } from '../function/check_path.js';

export const cd = async (pathJump) => {

    const pathNow = start();
    try {
        if (pathJump.indexOf(':\\') === 1 ) {
            check(pathJump);
        } else {
            const pathNext = lastDirectory(pathNow, pathJump);
            check(pathNext);
        }
    }
    catch {
        catch_err(pathNow);
    }    
}
