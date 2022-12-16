import fs from 'fs';
import path from 'path';
import { start } from '../start_fm/start_path.js';

export const ls = () => {
    let arr = [];
    fs.readdir(start(), {withFileTypes: true, encoding: 'utf8'}, (error, files) => {
        if (error) throw new Error ('FS operation failed');
        files.forEach(async (item) => {
            const extname =  path.extname(item.name);
            arr.push(
                {
                    name: path.basename(item.name, extname), 
                    resolution: extname.slice(1),
                    file: item.isFile() ? 'File' : 'Directory'
                
                }
            );
        });

        let arr__dir = [];
        let arr_file = [];
        let arr_general = [];

        arr.forEach((elem, index) => {
            if (elem.file === 'Directory') {
                arr.sort((a, b) => a.name > b.name ? 1 : -1);
                arr__dir.push(elem);
            }
            if (elem.file === 'File') {
                arr.sort((a, b) => a.name > b.name ? 1 : -1);
                arr_file.push(elem);
            }
        });
        arr_general.push(arr__dir, arr_file);
        let newArray = arr_general.flat();
        console.table(newArray);
        process.stdout.write(`You are currently in path: ${start()}\n
Enter command or "help" for a list of commands: `);
    });
}
