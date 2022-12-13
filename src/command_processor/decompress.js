import zlip from 'node:zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'node:stream';
// import { lastDirectory } from '../start_fm/path_generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.parse(__dirname).dir;
const path_file_read = path.join(root, 'files', 'text.txt');
const path_file_zip = path.join(root, 'files', 'text.gz');

const args = process.argv.slice(2).toString();

const decompess =  async () => {
    // const path_next = lastDirectory();
    const gzip = zlip.createUnzip();
    const read_zip = fs.createReadStream(path_file_zip);
    const write_zip = fs.createWriteStream(path_file_read, { encoding: 'utf8'});
    pipeline(read_zip, gzip, write_zip, (error) => {
        if (error) throw new Error('File not decompress');
    });
    process.stdout.write(`You are currently in path: ${1}\n
Enter command or "help" for a list of commands: `);
}

await decompess();
