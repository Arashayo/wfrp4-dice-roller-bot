const { Client, Discord, Collection, Events, GatewayIntentBits } = require('discord.js');
const {token} = require('./config.json');
const fs = require('fs');
const path = require('path');

global.globalCheck = false;
global.globalRoll = null;
global.globalSL = null;
global.globalUser = null;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'slashCommands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('js'));

for(const file of commandFiles) 
{
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    if('data' in command && 'execute' in command) 
    {
        client.commands.set(command.data.name, command);
    }
    else 
    {
        console.log("Wrong Data or Execute");
    }
}

fs.readdir('./events', (err, files) => {
    if(err) {
        console.error(err);
        return;
    }

    for (const file of files) {
        if(file.endsWith('.js')){
        const event = require(`./events/${file}`);
        if (event.once){
            client.once(event.name, event.execute);
        }
        else{
            client.on(event.name, (...args) => event.execute(...args, client));
        }
        }
    }
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;
    
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({content: 'There was an error', ephemeral: true });
    }
});

client.login(token);