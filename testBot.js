var TelegramBot = require('node-telegram-bot-api');

// get from Heroku config variable
var token = process.env.token;
var channelID = +(process.env.channelID);
var port = process.env.PORT || 8443;
var host = process.env.HOST;

console.log('token type', typeof token);

var webhook = {
	webHook: {
		port: port,
		host: host
	}
}

var bot = new TelegramBot(token, webhook);

console.log('new bot');

// var interval = 3 * 3600 * 1000;
bot.sendMessage(channelID, 'test Bot: Hello~~~~').then(function(response){
	console.log('res:', response);
});