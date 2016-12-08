const request = require('request');
const cheerio = require('cheerio');

const getCurrency = (callback) => {
    const url = 'http://rate.bot.com.tw/xrt?Lang=zh-TW';
    request(url, (err, res, body) => {
        const $ = cheerio.load(body);

        const currency = {
        	time: $('.time').text(),
        	jpCurrency: $(".print_show:contains('JPY')").parents('tr').find('td').eq(2).text(),
            usCurrency: $(".print_show:contains('USD')").parents('tr').find('td').eq(2).text(),
        };

        const message = `✨ 台灣銀行 🇹🇼 出售即時現金匯率(公告時間：${ currency.time })：
🇯🇵 日幣：${ currency.jpCurrency }
🇺🇸 美金：${ currency.usCurrency }
✨ 更多幣別請參考 🤘🤘🤘：http://rate.bot.com.tw/xrt?Lang=zh-TW
`;

        callback(err, message);
    });
}

module.exports = getCurrency;