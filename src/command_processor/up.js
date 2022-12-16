import { last, start } from '../start_fm/start_path.js';
import { lastDirectory } from '../start_fm/path_generator.js';

export const up = () => {
    const now_path = start().split('\\');
    now_path.pop();
    const str = now_path.join('\\');
    const path_next = lastDirectory(str);
    last(path_next);
    process.stdout.write(`You are currently in path: ${path_next}\n
Enter command or "help" for a list of commands: `);
}
