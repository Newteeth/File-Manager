import { cd } from '../command_processor/cd.js';
import { ls } from '../command_processor/ls.js';
import { hashing } from '../command_processor/hash.js';
import { compress } from '../command_processor/compress.js';
import { up } from '../command_processor/up.js';

export const find_commands = (command_terminal) => {

    const args = command_terminal.split(' ');
    const args_1 = args[0];
    const args_2 = args[1];
    const args_3 = args[2];

    switch (args_1) {
        case 'cd': cd(args_2);
        break;
        case 'ls': ls();
        break;
        case 'up': up();
        break;
        case 'add': console.log('this is: ' + args_1);
        break;
        case 'cat': console.log('this is: ' + args_1);
        break;
        case 'cp': console.log('this is: ' + args_1);
        break;
        case 'mv': console.log('this is: ' + args_1);
        break;
        case 'rm': console.log('this is: ' + args_1);
        break;
        case 'rn': console.log('this is: ' + args_1);
        break;
        case 'compress': compress(args_2, args_3); 
        break;
        case 'decompress': console.log('this is: ' + args_1);
        break;
        case 'hash': hashing(args_2);
        break;

    }

}