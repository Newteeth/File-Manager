import process from 'process';

export const catch_err = (pathCorrect) => {
    process.stdout.write(`> PATH NOT CORRECT <\n`);
    process.stdout.write(`You are currently in path: ${pathCorrect}\n
Enter command or "help" for a list of commands: `);
}
