const TelegramBot = require('node-telegram-bot-api');
const getCurrency = require('./src/getCurrency');
const later = require('later');

// get from Heroku config constiable
const token = process.env.token;
const channelID = process.env.channelID;
const port = process.env.PORT || 8443;
const host = process.env.HOST;

const webhook = {
	webHook: {
		port: port,
		host: host
	}
}

const bot = new TelegramBot(token, webhook);
later.date.timezone("Asia/Taipei");
// const sched = later.parse.recur().on(8, 9, 10, 11, 12, 13, 14, 15, 16, 17).hour().onWeekday();
const sched = later.parse.recur().on(0).minute().after(8).hour().before(18).hour().onWeekday();

console.log('app start!');

// bot send message every hours.
const instance = later.setInterval(() => {
	getCurrency((err, currency) => {
		console.log('send Message:', currency);
		bot.sendMessage(channelID, currency);
	});
}, sched);