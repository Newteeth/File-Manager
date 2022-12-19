import fs from 'fs';
import path from 'path';
import { start } from '../start_fm/start_path.js';
import { messegePath } from '../function/messege.js';


export const ls = () => {

    const pathNow = start();
    let arr = [];    
    let arrDir = [];
    let arrFile = [];
    let arrGeneral = [];
    
    fs.readdir(pathNow, {withFileTypes: true, encoding: 'utf8'}, (error, files) => {
        if (error) {
            console.error ('FS operation failed');
            messegePath(pathNow);
        }
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
        arr.forEach((elem, index) => {
            if (elem.file === 'Directory') {
                arr.sort((a, b) => a.name > b.name ? 1 : -1);
                arrDir.push(elem);
            }
            if (elem.file === 'File') {
                arr.sort((a, b) => a.name > b.name ? 1 : -1);
                arrFile.push(elem);
            }
        });
        arrGeneral.push(arrDir, arrFile);
        let newArray = arrGeneral.flat();
        console.table(newArray);
        messegePath(pathNow);
    });
}
