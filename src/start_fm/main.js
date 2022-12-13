import process from 'process';
import { helloFile } from '../start_fm/file_greeting.js';

const startFile = async () => {
    const user = process.argv.find((item) => item.startsWith('--username')).split('=')[1];
    helloFile(user);
};

await startFile()
