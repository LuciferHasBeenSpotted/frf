import handle from '../handle.js';

export default function(client) {

    handle('buttons', async path => {

        const btnName = path.split('/').pop().split('.')[0];
        
        const btnCode = await import(path);

        client.buttons.push({ 
        
            name: btnName, 
            code: btnCode.default 
        
        });

        console.log(`Le bouton ${btnName} est prêt à être utilisé`);
    });
};