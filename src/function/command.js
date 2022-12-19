import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import process from 'process';
import { lastDirectory } from '../start_fm/path_generator.js';
import { fork } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.parse(__dirname).dir;
const path_command_book = path.join(root, 'config.json');
const path_command = path.join(root, 'command_processor');


const commander = (command) => {
    const buffer = Buffer.from(command).toString().trim();
    const buffer_cmd = Buffer.from(command).toString().trim().split(' ')[0];

    if (buffer === 'Help' || buffer === 'help') {
        fs.readFile(path_command_book, (error, data) => {
            let arr = [];
            if (error) throw new Error ('///');
            let command_in_json = JSON.parse(data);
            Object.keys(command_in_json).forEach((item, i) => {
                // const pos = Object.values(command_in_json)[i].indexOf('<');
                // console.log(pos);
                // console.log(typeof Object.values(command_in_json)[i]);
                arr.push(
                    {
                        command: Object.keys(command_in_json)[i], 
                        description: Object.values(command_in_json)[i],
                        // path: (Object.values(command_in_json)).slice(pos)
                    });
            });
            console.table(arr);
            process.stdout.write(`You are currently in path: ${__dirname}\n 
Enter command or "help" for a list of commands: `);
    
        });
    } else {
        fs.readFile(path_command_book, (error, data) => {
            const command_in_json = JSON.parse(data);
            Object.keys(command_in_json).forEach(element => {
                if (buffer_cmd === element) {
                    const modulePath = lastDirectory(path_command, `${buffer_cmd}.js`);
                    const spawnChildProcess = async (args) => {
                        fork(modulePath, [args]);
                    };                    
                    spawnChildProcess(buffer);
                }
            });
            ;
        });
    }
};
process.stdin.on('data', commander);