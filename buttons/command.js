import { PermissionFlagsBits } from 'discord.js';

export default async function(interaction) {

    const category = interaction.channel.parent;
    interaction.guild.channels.create({
        parent: category,
        name: interaction.member.user.username,
        permissionOverwrites: [
            {
                id: interaction.member.id,
                allow: PermissionFlagsBits.ViewChannel
            },
            {
                id: interaction.guild.roles.cache.find(r => r.id == '1084904662920081562'),
                deny: PermissionFlagsBits.ViewChannel
            },
            {
                id: interaction.guild.roles.everyone,
                deny: PermissionFlagsBits.ViewChannel
            }
        ]
    })

    await interaction.reply({ 
        content: "Votre ticket a été créé", 
        ephemeral: true 
    });
}