import { ADMINS } from '../utils/constantes.js';

export default async function(interaction) {
    if(interaction.isCommand()) {
        const notAdmin = "Vous n'avez pas la permission de faire cela";
        
        if(!ADMINS.find(id => id == interaction.member.id)) return await interaction.reply({ 
            content: notAdmin, 
            ephemeral: true 
        });
        
        const command = interaction.client.commands.find(cmd => cmd.name == interaction.commandName);
        
        if(!command) return;
        
        command.run(interaction);
    }
    else if(interaction.isButton()) {
        
        const button = interaction.client.buttons.find(btn => btn.name === interaction.customId);
        
        if(!button) return;
        
        button.code(interaction);
    }
};