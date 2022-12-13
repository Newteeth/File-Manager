import { lastDirectory } from '../start_fm/path_generator.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.join(__filename);
// const root = path.parse(__dirname).dir;
const f = os.homedir();
// const args = process.argv.slice(2).toString();

const ls = () => {
    let arr = [];    

    fs.readdir(f, (error, files) => {
        if (error) throw new Error ('FS operation failed');
        
        files.forEach((item, index) => {
            const extname = path.extname(item);            
            const path_next = lastDirectory(f, item);
            const dir = fs.stat(path_next, (error, item) => { // work
                if (error) throw new Error ('FS operation failed');
                return item.isFile() ? 'File' : 'Directory';                
            });
            arr.push(
                { 
                    name: path.basename(item, extname), 
                    resolution: extname
                    // file: dir // not work
                }
            );
        });
        console.table(arr);
        process.stdout.write(`You are currently in path: ${"1"}\n
Enter command or "help" for a list of commands: `);
    });
}

ls();
