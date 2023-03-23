export default {
    description: 'Bannir un membre',
    async run(interaction) {

        const member = interaction.options.getMember('membre');
        const reason = interaction.options.getString('raison');

        if(!member.bannable) return await interaction.reply({ 
            content: "Tu ne peux pas bannir ce membre", 
            ephemeral: true 
        });
        
        await member.ban({ 
            deleteMessageSeconds: 604800, 
            reason: reason ? reason : 'Pas de raison' 
        });
        
        await interaction.reply({ 
            content: "Le membre a bien été bannit", 
            ephemeral: true 
        });
    },
    options: [
        {
            name: 'membre',
            type: 6,
            required: true,
            description: "Titre de l'embed"
        },
        {
            name: 'raison',
            type: 3,
            description: "Raison du banissement"
        }
    ]
};