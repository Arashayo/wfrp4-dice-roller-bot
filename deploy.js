const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');

const commands = [];
const commandFiles = fs.readdirSync('./slashCommands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./slashCommands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
	try {
		const data = await rest.put(
			Routes.applicationCommands(clientId, guildId),
			{ body: commands },
		);
		console.log(`Successfully reloaded ${data.length} commands.`);
	} catch (error) {
		console.error(error);
	}
})();