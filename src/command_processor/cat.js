import { lastDirectory } from '../start_fm/path_generator.js';

const args = process.argv.slice(2).toString();

const cat =  () => {
    const path_next = lastDirectory();
    console.log('function cat: ' + args);
    process.stdout.write(`You are currently in path: ${1}\n
Enter command or "help" for a list of commands: `);
}

cat();