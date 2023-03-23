import handle from '../handle.js';

export default function(client) {
    
    handle('commands', async path => {
    
        const cmdName = path.split('/').pop().split('.')[0];
    
        const cmdCode = await import(path);

        const command = {
            name: cmdName
        };

        for(const k in cmdCode.default) command[k] = cmdCode.default[k];

        client.commands.push(command);
    
        console.log(`La commande ${cmdName} est chargée`);
    });
};