const {Client, IntentsBitField} = require("discord.js");
const botClient = new Client({
    intents: [ // Intents are required to allow our bot to receive Gateway Events
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
});

botClient.login(require("./secrets/botToken"));