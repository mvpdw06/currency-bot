var TelegramBot = require('node-telegram-bot-api');

var token = process.env.token;

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, { polling: true });

// send Message
bot.sendMessage(process.env.channelID, 'Hello~');