export default {
    description: "Enregistrer en bdd une commande",
    async run(interaction) {

        const channelCategory = interaction.channel.parent.name;
        if(channelCategory !== 'contact') return await interaction.reply({
            
            content: "Tu ne peux pas utiliser cette commande ici",
            ephemeral: true
        
        });

        const log = interaction.guild.channels.cache.get('1088144273297383576');

        const price = interaction.options.getNumber('price');
        const membre = interaction.options.getUser('membre');
        const magasin = interaction.options.getString('magasin');
        const pourcentage = interaction.options.getNumber('pourcentage');

        const embed = interaction.client.embed();

        embed.setTitle(`Commande de: ${membre.tag}`);
        embed.setDescription(`ID membre: ${membre.id}\n\nA demander un r3fund chez ${magasin} pour une valeur totale de: ${price}e\n\nIl a choisit de payer ${pourcentage} donc ${price/100*pourcentage}e`)

        await interaction.channel.delete();

        log.send({
           
            embeds: [embed]
        
        });

    },
    options: [
        {
            name: 'membre',
            description: "Membre avec qui l'affaire a été conclu",
            type: 6,
            required: true
        },
        {
            name: 'price',
            description: "Prix de la commande",
            type: 10,
            required: true
        },
        {
            name: "magasin",
            description: "Chez qui ce refund a t'il été fait ?",
            type: 3,
            required: true
        },
        {
            name: "pourcentage",
            description: "Pourcentage qu'il a payé (exemple 30% = 30)",
            type: 10,
            required: true
        }
    ]
}