var TelegramBot = require('node-telegram-bot-api');

var token = process.env.token;

var port = process.env.PORT || 8443;
var host = process.env.HOST;

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, {webHook: {port: port, host: host}});

// send Message
bot.sendMessage(process.env.channelID, 'Hello~');