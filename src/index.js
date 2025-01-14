require('dotenv/config');
const { Client, IntentsBitField } = require('discord.js');
const OpenAIClient = require('./utils/openaiClient');
const ChatHandler = require('./events/messageCreate/chatHandler');

console.log("🟢 Initializing Client...");
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildPresences,
    ],
});

const openaiClient = new OpenAIClient(process.env.OPENAI_KEY);
const chatHandler = new ChatHandler(client, openaiClient);

client.on('ready', () => {
    console.log(`🎆 Logged in as ${client.user.tag}`);
    require('./events/ready/consoleLog')(client);
});

client.on('messageCreate', (message) => chatHandler.handleMessage(message));

client.login(process.env.TOKEN);