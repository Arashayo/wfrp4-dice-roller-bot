const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('opposed')
        .setDescription('Compare test with other player')
        .addBooleanOption(option => 
            option.setName('fight')
            .setDescription('If you want to compare fight tests, set "True"')),

    async execute(interaction){

    }
    
}