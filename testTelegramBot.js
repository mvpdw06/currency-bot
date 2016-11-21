var TelegramBot = require('node-telegram-bot-api');

var token = process.env.token;

console.log('token', token);

var port = process.env.PORT || 8443;
var host = process.env.HOST;

var bot = new TelegramBot(token, {webHook: {port: port, host: host});

console.log('bot', bot);

bot.getMe();