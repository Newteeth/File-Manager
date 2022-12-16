import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import process from 'process';
import { lastDirectory } from '../start_fm/path_generator.js';
import { find_commands } from '../function/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.parse(__dirname).dir;
const path_command_book = path.join(root, 'config.json');
const path_command = path.join(root, 'command_processor');

export const commander_one = (command) => {
    const buffer = Buffer.from(command).toString().trim();
    const buffer_cmd = Buffer.from(command).toString().trim().split(' ')[0];

    if (buffer === 'Help' || buffer === 'help') {
        fs.readFile(path_command_book, (error, data) => {
            let arr = [];
            if (error) throw new Error ('///');
            let command_in_json = JSON.parse(data);
            Object.keys(command_in_json).forEach((item, i) => {
                const command_for_path = Object.values(command_in_json)[i].split('<')[1];
                arr.push(
                    {
                        command: Object.keys(command_in_json)[i], 
                        description: Object.values(command_in_json)[i].split('<')[0],
                        path: command_for_path === undefined ? 'not command' : command_for_path
                    });
            });
            console.table(arr);
            process.stdout.write(`You are currently in path: ${'1'}\n 
Enter command or "help" for a list of commands: `);
    
        });
    } else {
        find_commands(buffer);
    }
}