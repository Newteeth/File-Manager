import os from 'os';
const path_home_dir = os.homedir();

let last_path = path_home_dir; 

export const start = () => {
    return last_path;
}

export const last = (new_path) => {
    last_path = new_path;
}
