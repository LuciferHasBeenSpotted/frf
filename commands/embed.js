export default {
    description: 'Envoyer un embed',
    async run(interaction) {

        const titre = interaction.options.getString('titre');
        const description = interaction.options.getString('description');

        const embed = interaction.client.embed();

        if(titre) embed.setTitle(titre.toUpperCase());
        if(description) embed.setDescription(description?.replaceAll('$$$', '\n'));

        if(!titre && !description) return await interaction.reply({
            content: "Vous ne pouvez pas créer d'embed vide.", 
            ephemeral: true
        });

        interaction.channel.send({ 
            embeds: [embed] 
        });
        
        await interaction.reply({ 
            content: "L'embed a bien été envoyé", 
            ephemeral: true 
        });
    },
    options: [
        {
            name: 'titre',
            type: 3,
            description: "Titre de l'embed"
        },
        {
            name: 'description',
            type: 3,
            description: "Description de l'embed"
        }
    ]
};