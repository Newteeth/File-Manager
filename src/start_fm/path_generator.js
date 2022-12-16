import os from 'os';
import path from 'path';
export let home_dir = os.homedir();
export let clone_home_dir = home_dir;

export const lastDirectory = (...args) => {
    return path.join(...args);
}
