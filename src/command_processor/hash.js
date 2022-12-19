import  fs  from 'fs';
import crypto from 'crypto';
import process from 'process';
import { lastDirectory } from '../start_fm/path_generator.js';
import { start } from '../start_fm/start_path.js';
import { catch_err } from '../function/catch_error.js';
import { messegePath } from '../function/messege.js';


export const hashing = async (pathFileForHash) => {
   
    const pathNow = start();

    try {        
        const pathFile = lastDirectory(pathNow, pathFileForHash);
        fs.readFile(pathFile, (error, date) => {
            const hash = crypto.createHash('sha256').update(date).digest('hex');
            process.stdout.write(`HASH: ${hash}\n`);
            messegePath(pathNow);
        });
    }
    catch {
        catch_err(pathNow);
    }
}