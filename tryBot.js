const TelegramBot = require('node-telegram-bot-api');

const token = process.env.token;

const port = process.env.PORT || 8443;
const host = process.env.HOST;

const bot = new TelegramBot(token, {webHook: {port: port, host: host}});

// send Message
const message = `✨ 台灣銀行 🇹🇼 出售現金匯率：
🇯🇵 日幣：0.2701 
🇺🇸 美金：31.4
✨ 更多幣別請參考 🤘🤘🤘：http://rate.bot.com.tw/xrt?Lang=zh-TW
`;
bot.sendMessage(process.env.channelID, message);