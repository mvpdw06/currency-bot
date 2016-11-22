var TelegramBot = require('node-telegram-bot-api');
var getCurrency = require('./getCurrency');

// get from Heroku config variable
var token = process.env.token;
var channelID = process.env.channelID;
var port = process.env.PORT || 8443;
var host = process.env.HOST;

var webhook = {
	webHook: {
		port: port,
		host: host
	}
}

var bot = new TelegramBot(token, webhook);

console.log('app start!');

// keep your server awake. run every 5 minutes.
setInterval(function(){
	getCurrency(function(err, currency){
		console.log('Keep server awake.', currency);
	});
}, 5 * 60 * 1000);

// bot send message every hours.
setInterval(function(){
	getCurrency(function(err, currency){
		console.log('send Message:', currency);
		bot.sendMessage(channelID, currency);
	});
}, 3600 * 1000);