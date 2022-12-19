import fs, { constants } from 'fs';
import { lastDirectory } from '../start_fm/path_generator.js';
import { start } from '../start_fm/start_path.js';
import { messegePath } from '../function/messege.js';

export const add =  (pathNewFile) => {

    const pathNow = start();
    const point = pathNewFile.indexOf('.');
    
    try {
        const pathNext = lastDirectory(pathNow, pathNewFile);
        fs.access(pathNext, constants.F_OK, (error) => {
            if (pathNext) {
                if (point === 1) {
                    fs.writeFile(pathNext, '', (err) => { // TODO not always creat file
                        if (err) console.log('File cannot create');
                        process.stdout.write(`File ${pathNewFile} create on ${pathNow} path\n`);
                        messegePath(pathNow);
                    });
                }
                if (point === -1) {
                    fs.mkdir(pathNext, err => {
                        if (err) console.log('Folder cannot create');
                        process.stdout.write(`Folder ${pathNewFile} create on ${pathNow} path\n`);
                        messegePath(pathNow);
                    });
                }
            }
        });
    }
    catch {
        catch_err(pathNow);
    }
}
