import { createDiffieHellmanGroup } from 'crypto';
import os, { cpus, homedir, EOL } from 'os';
import process from 'process';
import { start } from '../../start_fm/start_path.js';
import { messegePath } from '../../function/messege.js';

export const osInform = (arg) => {

    const path_now = start();
    const informCPU = cpus();
    const homeDir = homedir();
    const userName = os.hostname();
    const architecturCP = os.arch();
    let arr = [];

    try {
        if (arg === '--EOL') {
            console.log('this here')
            console.log(`EOL: ` + JSON.stringify(os.EOL));
            messegePath(path_now);
        }

        if (arg === '--cpus') {
            const leng = informCPU.length;
            informCPU.forEach((element) => {
                const ghz = (element.speed / 1000).toFixed(2) + ` GHz`;
                arr.push(
                    {
                        name: element.model,
                        speed: ghz
                    });                
            });
            console.log(`Overall amount of CPUS: ${leng}\n`);
            console.table(arr);
            messegePath(path_now);
        }

        if (arg === '--homedir') {            
            console.log(`HomeDir this machine: ${homeDir}\n`);
            messegePath(path_now);
        }

        if (arg === '--username') {
            console.log(`Usre name: ${userName}`);
            messegePath(path_now);
        }

        if (arg === '--architecture') {
            console.log(`Architecture CPU: ${architecturCP}`);
            messegePath(path_now);
        }
    }
    catch {
        messegePath(path_now);
    }  

}
