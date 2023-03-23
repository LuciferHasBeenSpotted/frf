export default {
    description: "Effacer un nombre de message donné",
    async run(interaction) {
        const nombre = interaction.options.getNumber('nombre-de-message');
        
        if(!nombre) return await interaction.reply({
            
            content: 'Tu dois oblligatoirement fournir un nombre de messages à supprimer',
            ephemeral: true

        })
        
        if(nombre > 100) return await interaction.reply({ 

            content: 'Tu ne peux pas supprimer plus de 100 messages à la fois', 
            ephemeral: true 

        });

        interaction.channel.bulkDelete(nombre);
        
        await interaction.reply({

            content: nombre + " messages ont bien été supprimés", 
            ephemeral: true

        });
    },
    options: [
        {
            name: "nombre-de-message",
            type: 10,
            description: "Nombre de message à supprimer (>=100)"
        },
        {
            name: "utilisateur",
            type: 6,
            description: "Utilisateur dont il faut supprimer les messages"
        }
    ]
}