import  fs  from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import hash_file from 'crypto';
import process from 'process';
import { lastDirectory } from '../start_fm/path_generator.js';

const { createHmac } = await import('crypto');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.parse(__dirname).dir;
const path_file_hash = path.join(root, 'files', 'text.txt');

const args = process.argv.slice(2).toString();

const hash = async () => {
    // const path_next = lastDirectory();
    fs.readFile(path_file_hash, 'utf8', (error, file) => {
        if (error) throw new Error ('Error');
        const hash_file = createHmac('sha256', file).digest('hex');
        process.stdout.write(`HASH: ${hash_file}\n`);
        process.stdout.write(`You are currently in path: ${1}\n
Enter command or "help" for a list of commands: `);
    });
}

await hash();

