import fs, { constants } from 'fs';
import { pipeline } from 'stream';
import { lastDirectory } from '../start_fm/path_generator.js';
import { start } from '../start_fm/start_path.js';
import { catch_err } from '../function/catch_error.js';
import { messegePath } from '../function/messege.js';


export const cat =  (renameFile) => {
    
    const pathNow = start();
    
    try {
        const pathNext = lastDirectory(pathNow, renameFile);
        fs.access(pathNext, constants.F_OK, (error) => {
            if (error) {
                process.stdout.write(`${renameFile} not find\n`);
                messegePath(pathNow);
            } else {
                const readStream = fs.createReadStream(pathNext, {encoding: 'utf-8'});
                readStream.on('data', (file) => {
                    process.stdout.write(`${file}\n`);
                    messegePath(pathNow);
                });
            }
        });        
    }
    catch {
        catch_err(pathNow);
    }    
}








