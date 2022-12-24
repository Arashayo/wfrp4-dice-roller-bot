const {Events} = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(info) {
        console.log(`${info.user.tag}! logged in`);
    }
}