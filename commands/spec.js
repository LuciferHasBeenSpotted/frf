export default {
    description: "Commande de test",
    async run(interaction) {
        
        const embed = interaction.client.embed();
        embed.setTitle('Deviens membre');
        embed.setDescription('En cliquant sur ce bouton, tu déclares avoir prit connaissance du réglement et que tu les acceptes.\n')

        const button = interaction.client.button();
        button.setLabel('Rejoin nous');
        button.setStyle('Primary');
        button.setCustomId('member');

        const row = interaction.client.row().addComponents(button);

        interaction.channel.send({

            embeds: [embed],
            components: [row]

        });

        await interaction.reply({

            content: "Le message a bien été envoyé",
            ephemeral: true

        });

    }
}   