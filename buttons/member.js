import { ADMINS } from '../utils/constantes.js';

export default async function(interaction) {

    const role = interaction.guild.roles.cache.find(r => r.id == "1084904662920081562");

    const member = interaction.member;

    if(ADMINS.includes(member.id)) return await interaction;
    
    if(member.roles.cache.find(r => r.id == role.id)) return await member.roles.remove(role);

    member.roles.add(role);

    return await interaction;

};