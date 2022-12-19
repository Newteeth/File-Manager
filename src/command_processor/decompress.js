import  fs, { constants }  from 'fs';
import path from 'path';
import zlip from 'node:zlib';
import process from 'process';
import { pipeline } from 'node:stream';
import { lastDirectory } from '../start_fm/path_generator.js';
import { start } from '../start_fm/start_path.js';
import { messegePath } from '../function/messege.js';

export const decompess =  async (...args) => {

    const pathNow = start();
    const gzip = zlip.BrotliDecompress();    
    const pathFileForDecompress = lastDirectory(pathNow, args[0]);
    const readZip = fs.createReadStream(pathFileForDecompress);
    const point = args[1].indexOf(':');
    const nameFile = `${args[0]}`.split('.br')[0];
    let pathToDecompression = '';
    let fileToDecompress = '';
    let writeDeZip = '';

    try {
        if (point > 0) {
            pathToDecompression = args[1];
            fs.access(pathToDecompression, constants.F_OK, (error) => {
                if (error) {
                    console.error('Invalid path');
                    messegePath(pathNow);
                    return;
                }
                fileToDecompress = lastDirectory(args[1], nameFile);
                writeDeZip = fs.createWriteStream(fileToDecompress, { encoding: 'utf8'});
                pipeline(readZip, gzip, writeDeZip, (error) => {
                    if (error) console.log('File not decompress');
                    process.stdout.write(`${args[0]} decompress in: ${pathToDecompression}\n`)
                    messegePath(pathNow);
                });
            });            
        }
        if (point === -1) {
            pathToDecompression = args[1];
            fs.access(pathFileForDecompress, constants.F_OK, (error) => {
                if (error) {
                    console.error('Invalid path');
                    messegePath(pathNow);
                    return;           
                }
                fileToDecompress = lastDirectory(pathNow, nameFile);
                writeDeZip = fs.createWriteStream(fileToDecompress, { encoding: 'utf8'});
                pipeline(readZip, gzip, writeDeZip, (error) => {
                    if (error) {
                        console.error('File not decompress');
                        messegePath(pathNow);
                        return;
                    }
                    process.stdout.write(`${args[0]} decompress in: ${pathToDecompression}\n`);
                    messegePath(pathNow);
                });
            });
        }
    }
    catch {
        console.error('error')
    }    
}


