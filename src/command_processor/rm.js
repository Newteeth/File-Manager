import fs, { constants } from 'fs';
import { start } from '../start_fm/start_path.js';
import { lastDirectory } from '../start_fm/path_generator.js';
import { messegePath } from '../function/messege.js';

export const rm =  (pathFileForDelete) => {

    const pathNow = start();

    try {
        const pathNext = lastDirectory(pathNow, pathFileForDelete);
        fs.access(pathNext, constants.F_OK, (error) => {
            if (error) {
                console.log(`File ${pathFileForDelete} missing\n`);
                messegePath(pathNow);
            } else {
                fs.unlink(pathNext, (error) => {
                    if (error) console.log ('FS operation failed');
                });
                process.stdout.write(`File ${pathFileForDelete} delete\n`);
                messegePath(pathNow);
            }
        });

    }
    catch {
        catch_err(pathNow);
    }
}
