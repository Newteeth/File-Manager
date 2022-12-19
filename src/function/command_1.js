import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { find_commands } from '../function/index.js';
import { start } from '../start_fm/start_path.js';
import { messegePath } from '../function/messege.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.parse(__dirname).dir;
const pathCommandBook = path.join(root, 'config.json');

export const commander_one = (command) => {

    const pathNow = start();
    const buffer = Buffer.from(command).toString().trim();

    if (buffer === 'Help' || buffer === 'help') {
        fs.readFile(pathCommandBook, (error, data) => {
            let arr = [];
            if (error) console.error ('Invalid command');
            let commandInJson = JSON.parse(data);
            Object.keys(commandInJson).forEach((item, i) => {
                const commandForPath = Object.values(commandInJson)[i].split('<')[1];
                arr.push(
                    {
                        command: Object.keys(commandInJson)[i], 
                        description: Object.values(commandInJson)[i].split('<')[0],
                        path: commandForPath === undefined ? 'not command' : commandForPath
                    });
            });
            console.table(arr);
            messegePath(pathNow);
        });
    } else {
        find_commands(buffer);
    }
}