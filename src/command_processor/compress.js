import  fs, { constants }  from 'fs';
import path from 'path';
import zlip from 'node:zlib';
import process from 'process';
import { pipeline } from 'node:stream';
import { lastDirectory } from '../start_fm/path_generator.js';
import { start } from '../start_fm/start_path.js';
import { messegePath } from '../function/messege.js';

export const compress = async (...args) => {
    
    const pathNow = start();
    const gzip = zlip.BrotliCompress();    
    const pathFileForCompress = lastDirectory(pathNow, args[0]);
    const readZip = fs.createReadStream(pathFileForCompress);
    const point = args[1].indexOf(':');
    let pathToCompression = '';
    let fileToCompress = '';
    let writeZip = '';

    try {
        if (point > 0) {
            pathToCompression = args[1];
            fs.access(pathToCompression, constants.F_OK, (error) => {
                if (error) {
                    console.error('Invalid path');
                    messegePath(pathNow);
                    return;
                }
                fileToCompress = lastDirectory(args[1], `${args[0]}.br`);
                writeZip = fs.createWriteStream(fileToCompress, { encoding: 'utf8'});
                pipeline(readZip, gzip, writeZip, (error) => {
                    if (error) console.log('File not compress');
                    process.stdout.write(`${args[0]} compress in: ${pathToCompression}\n`)
                    messegePath(pathNow);
                });
            });            
        }
        if (point === -1) {
            pathToCompression = args[1];
            fileToCompress = lastDirectory(pathNow, pathToCompression);
            fs.access(fileToCompress, constants.F_OK, (error) => {
                if (error) {
                    console.error('Invalid path');
                    messegePath(pathNow);
                    return;           
                }
                const readZip = fs.createReadStream(pathFileForCompress);
                writeZip = fs.createWriteStream(path.join(fileToCompress, `${args[0]}.br`), { encoding: 'utf8'});
                pipeline(readZip, gzip, writeZip, (error) => {
                    if (error) {
                        console.error('File not compress');
                        messegePath(pathNow);
                        return;
                    }
                    process.stdout.write(`${args[0]} compress in: ${pathToCompression}\n`);
                    messegePath(pathNow);
                });
            });  
        }
    }
    catch {
        console.error('error')
    }    
}
