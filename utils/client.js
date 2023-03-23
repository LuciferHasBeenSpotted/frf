import { ActionRowBuilder, ButtonBuilder, Client } from 'discord.js';
import { EmbedBuilder } from 'discord.js';


const CLIENT = new Client({ intents: 3276541 });

new Array('commands', 'buttons', 'giveaways').forEach(x => CLIENT[x] = new Array());

CLIENT.embed = _ => new EmbedBuilder();
CLIENT.button = _ => new ButtonBuilder();
CLIENT.row = _ => new ActionRowBuilder();

export default CLIENT;