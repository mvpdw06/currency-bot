var TelegramBot = require('node-telegram-bot-api');

var token = process.env.token;

console.log('token', token);

var port = process.env.PORT || 8080;

var io = require('socket.io').listen(app.listen(port));

var bot = new TelegramBot(token, { polling: true });

console.log('bot', bot);

bot.getMe();