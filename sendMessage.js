var TelegramBot = require('node-telegram-bot-api');
var getCurrency = require('./getCurrency');

// get from Heroku config variable
var token = process.env.token;
var channelID = process.env.channelID;

var bot = new TelegramBot(token, { polling: true });

var interval = 3 * 3600 * 1000;

setInterval(function(){
    getCurrency(function(err, currency){
        bot.sendMessage(channelID, currency);
    });
}, interval);