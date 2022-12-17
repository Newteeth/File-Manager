import fs, { constants } from 'fs';
import { start } from '../start_fm/start_path.js';
import { lastDirectory } from '../start_fm/path_generator.js';

export const rm =  (path_file_for_delete) => {
    const path_now = start();
    try {
        const path_next = lastDirectory(path_now, path_file_for_delete);
        fs.access(path_next, constants.F_OK, (error) => {
            if (error) {
                console.log(`File ${path_file_for_delete} missing\n`);
                process.stdout.write(`You are currently in path: ${path_now}\n
Enter command or "help" for a list of commands: `);
            } else {
                fs.unlink(path_next, (error) => {
                    if (error) console.log ('FS operation failed');
                });
                process.stdout.write(`File ${path_file_for_delete} delete`);
                process.stdout.write(`You are currently in path: ${path_now}\n
Enter command or "help" for a list of commands: `);
            }
        });

    }
    catch {
        catch_err(path_now);
    }
}
