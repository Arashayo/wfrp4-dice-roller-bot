const {SlashCommandBuilder} = require('discord.js');
const skillCheck = require('./../functions/slCalc.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Perform a skill check')
        .addNumberOption(option => 
            option.setName('skill_level')
            .setDescription('Set your character skill level')
            .setRequired(true))
        .addBooleanOption(option =>
            option.setName('hide')
			.setDescription('If you want to hide the roll, set "True"'))
        .addNumberOption(option =>
            option.setName('difficulty')
            .setDescription('Add test difficulty'))
        .addBooleanOption(option => 
            option.setName('dramatic')
            .setDescription('If you want to calculate SL, set "True"'))
        .addUserOption(option =>
            option.setName('opposed')
            .setDescription('Choose the player you want to compare test with')),
            
        async execute(interaction){
            let input = interaction.options.getNumber('skill_level') + interaction.options.getNumber('difficulty');
            const hideOption = interaction.options.get('hide');
            const dramaticOption = interaction.options.get('dramatic');
            const opposedOption = interaction.options.getUser('opposed');
            const roll = skillCheck.testRoll();
            
            let message;
            if (dramaticOption) {
              message = `Roll: ${roll}, SL: ${skillCheck.sl(input, roll)}`;
            } else {
              message = `Roll: ${roll}, Result: ${skillCheck.simpleCheck(input, roll)}`;
            }
            
            await interaction.reply({
              content: message,
              ephemeral: hideOption
            });
            
        }


}