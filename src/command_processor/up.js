import { last, start } from '../start_fm/start_path.js';
import { lastDirectory } from '../start_fm/path_generator.js';
import { messegePath } from '../function/messege.js';


export const up = () => {
    const pathNow = start().split('\\');
    pathNow.pop();
    const str = pathNow.join('\\');
    const pathNext = lastDirectory(str);
    last(pathNext);
    messegePath(pathNext);
}
