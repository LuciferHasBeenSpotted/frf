import handle from "../handle.js";

export default function(client) {

    handle('events', async path => {
    
        const evtName = path.split('/').pop().split('.')[0];
    
        const evtCode = await import(path);
    
    
        client.on(evtName, evtCode.default);
    });
};