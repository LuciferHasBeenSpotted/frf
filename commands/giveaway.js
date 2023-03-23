export default {
    description: "Faire des giveaway",
    async run(interaction) {
        const recompense = interaction.options.getString('recompense');
        const nombreGagnant = interaction.options.getNumber('nombre-gagnants');

        interaction.client.giveaways = {
            recompense, 
            nombreGagnant, 
            membres: new Array()
        }

        const embed = interaction.client.embed();
        embed.setTitle(recompense.toUpperCase());

        const enter = interaction.client.button();
        enter.setLabel("Je participe !");
        enter.setStyle('Primary');
        enter.setCustomId('enter');

        const out = interaction.client.button();
        out.setLabel('Je sors..');
        out.setStyle('Danger');
        out.setCustomId('out');

        const row = interaction.client.row().addComponents(enter, out);

        interaction.channel.send({ 
            embeds: [embed], 
            components: [row] 
        });

        await interaction.reply({ 
            content: `Le giveaway a bien été mis en mémoire`, 
            ephemeral: true 
        });
    },
    options: [
        {
            name: "recompense",
            type: 3,
            required: true,
            description: "récompense du giveaway"
        },
        {
            name: "nombre-gagnants",
            type: 10,
            description: 'Nombre de gagnants',
            required: true
        }
    ]
}