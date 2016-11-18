var TelegramBot = require('node-telegram-bot-api');

var token = '294566874:AAEcXj1DTM4dteq4sSB8WxYG4afWpn2U1cI';

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, { polling: true });

// send Message
bot.sendMessage(-1001096296906, 'Hello~');