const {SlashCommandBuilder,userMention} = require('discord.js');
const skillCheck = require('./../functions/slCalc.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('opposed')
        .setDescription('Compare test with other player, also shows ')
        .addNumberOption(option => 
            option.setName('skill_level')
            .setDescription('Set your character skill level')
            .setRequired(true)),

    async execute(interaction){
        const user = interaction.user.id;
        const roll = skillCheck.testRoll();
        const input = interaction.options.getNumber('skill_level');
        const sl = parseInt(skillCheck.sl(input, roll).split(", ")[0]);
        let message;

        message = `${userMention(user)} Roll: ${roll}, SL: (${sl})`


// This `if` checks if command `/opposed` was called before
        if(globalCheck !== false){
            if(sl>globalSL){
                message = `${userMention(user)} Defense Test: ${input}\n${userMention(user)} Roll: ${roll}, SL: (${sl})\n${userMention(user)} won by (${sl-globalSL}) SL`
            }
            else{
                message = `${userMention(user)} Defense Test: ${input}\n${userMention(user)} Roll: ${roll}, SL: (${sl})\n${userMention(globalUser)} won by (${globalSL-sl}) SL`
            }

            await interaction.reply(`${message}`);
            globalCheck = false;
        }  

// If this is the first occurence then this will be executed
        else{
            globalCheck = true;
            globalRoll = roll;
            globalSL = sl;
            globalUser = user;

            await interaction.reply(`${userMention(user)} Attack Test: ${input}\n${message}\nWaiting for opponents roll...`);
        }    

    }
    
}