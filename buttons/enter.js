export default async function(interaction) {
    const id = interaction.member.id;
    
    if(interaction.client.giveaways.includes(id)) return await interaction.reply({ 
        content: 'Vous êtes déjà dans ce giveaway..', 
        ephemeral: true
    });
    
    interaction.client.giveaways.push(id);
    
    await interaction.reply({ 
        content: 'Vous êtes bien entré dans ce giveaway', 
        ephemeral: true
    });
}