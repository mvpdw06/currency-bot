var TelegramBot = require('node-telegram-bot-api');

var token = process.env.token;

console.log('token', token);

var bot = new TelegramBot(token, { polling: true });

console.log('bot', bot);

bot.getMe();