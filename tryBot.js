const TelegramBot = require('node-telegram-bot-api');

const token = process.env.token;

const port = process.env.PORT || 8443;
const host = process.env.HOST;

const bot = new TelegramBot(token, {webHook: {port: port, host: host}});

// send Message
bot.sendMessage(process.env.channelID, 'Hello~');