const {Events} = require('discord.js');

module.exports = {
    name: Events.MessageDelete,
    async execute(mess, client) 
    {
        if(mess.author.id === '1055629213320888380')
        {
            const channel = client.channels.cache.find(channel => channel.name === 'roll-archive');
            await channel.send(`Roll deleted: ${mess.content}`);
        }
    }
};