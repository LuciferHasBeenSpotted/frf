export default {
    description: "Annoncer les résulats d'un giveaway en cours",
    async run(interaction) {
        const giveaways = interaction.client.giveaways;

        if(giveaways.length == 0) return await interaction.reply({ 
            content: "Il n'y a aucun giveaway en cours", 
            ephemeral: true 
        });

        const gagnant = giveaways[Math.floor(Math.random() * giveaways.length)];

        const embed = interaction.client.embed();
        embed.setTitle("REVEAL DU GAGNANT");
        embed.setDescription(`Félicitation <@${gagnant}>, tu as gagné !\n
                            Nous t'invition à **ouvrir un ticket  pour réclamer ton dû** <#1084907553999310848>\n
                            Vous avez un délai de 6 heures pour récupérer, après ce délai le giveaway sera relancé.`);

        // interaction.client.giveaways = new Array();

        interaction.channel.send({ 
            embeds: [embed] 
        });

        await interaction.reply({ 
            content: "Le reveal a bien été fait", 
            ephemeral: true 
        });
    }
}