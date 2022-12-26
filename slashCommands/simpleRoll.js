const { SlashCommandBuilder, userMention} = require('discord.js');
const roller = require('../functions/diceRollFunc.js');

module.exports = {
data: new SlashCommandBuilder()
	.setName('roll')
	.setDescription('Roll any dice you want')
	.addStringOption(option =>
		option.setName('dices')
			.setDescription('Roll the dices (use [x]d[y] format)')
			.setMaxLength(2000)
			.setRequired(true))
	.addBooleanOption(option =>
		option.setName('hide')
			.setDescription('If you want to hide the roll, set "True"')),

		async execute(interaction) {
			const input = roller.cutInput(interaction.options.getString('dices'));
			const hideOption = interaction.options.get('hide');
			console.log(interaction.user.username);

			await interaction.reply({
				content: `${userMention(interaction.user.id)} roll result: ${roller.roll(input[0],input[1])}`,
				ephemeral: hideOption
			  });

		}

    }