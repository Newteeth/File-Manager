import os from 'os';
import path from 'path';
export let home_dir = os.homedir();
export let clone_home_dir = home_dir;

export const lastDirectory = (...args) => {
    const last_dir = path.join(...args);
    return last_dir;
}
