export default async function(client) {
    console.log("Je suis bien connecté");

    const devGuild = client.guilds.cache.get('1059638495548809326');

    await devGuild.commands.set(client.commands);

    const countChannel = devGuild.channels.cache.get('1084947522604249228');
    
    await countChannel.setName(devGuild.memberCount + " membres");
    
    setInterval(async () => {
    
        await countChannel.setName(devGuild.memberCount + " membres");
    
    }, 1000*60*30);
}