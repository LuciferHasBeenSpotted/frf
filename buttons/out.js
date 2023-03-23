export default async function(interaction) {
    const id = interaction.member.id;
    if(!interaction.client.giveaways.includes(id)) return await interaction.reply({ 
        content: "Vous n'êtes pas dans ce giveaway..", 
        ephemeral: true});

    interaction.client.giveaways = interaction.client.giveaways.filter(e => e != id);

    await interaction.reply({ content: 'Vous êtes bien sorti dans ce giveaway',
     ephemeral: true
    });
}