import { join } from 'path';
import { readdir } from 'fs/promises';

export default function(dir, cb) {

    dir = join(process.cwd(), dir);
    
    readdir(dir).then(filenames => {
    
        for(const filename of filenames) {
    
            cb(join(dir, filename));
        };
    });
};