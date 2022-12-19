import process from 'process';

export const messegePath = (path) => {
    process.stdout.write(`You are currently in path: ${path}\n
Enter command or "help" for a list of commands: `);
}