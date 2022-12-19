import { cd } from '../command_processor/cd.js';
import { ls } from '../command_processor/ls.js';
import { hashing } from '../command_processor/hash.js';
import { compress } from '../command_processor/compress.js';
import { up } from '../command_processor/up.js';
import { add } from '../command_processor/add.js';
import { rm } from '../command_processor/rm.js';
import { cat } from '../command_processor/cat.js';
import { decompess } from '../command_processor/decompress.js';
import { osInform } from '../command_processor/os/os.js';

export const find_commands = (command_terminal) => {

    const args = command_terminal.split(' ');
    const args1 = args[0];
    const args2 = args[1];
    const args3 = args[2];

    switch (args1) {
        case 'cd': cd(args2); // work
        break;
        case 'ls': ls(); // work, but doble folder and lost folder
        break;
        case 'up': up(); // work, but not correct in D:\ 
        break;
        case 'add': add(args2); // work on the folder, but not work on the long name file and double words
        break;
        case 'cat': cat(args2); // work, but i wont use pipline
        break;
        case 'cp': console.log('this is: ' + args1);
        break;
        case 'mv': console.log('this is: ' + args1);
        break;
        case 'rm': rm(args2); // work
        break;
        case 'rn': console.log('this is: ' + args1);
        break;
        case 'compress': compress(args2, args3); // work
        break;
        case 'decompress': decompess(args2, args3); // work
        break;
        case 'hash': hashing(args2); // work
        break;
        case 'os' : osInform(args2);

    }

}