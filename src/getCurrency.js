const request = require('request');
const cheerio = require('cheerio');

const getCurrency = (callback) => {
    const url = 'http://rate.bot.com.tw/xrt?Lang=zh-TW';
    request(url, (err, res, body) => {
        const $ = cheerio.load(body);

        const currency = {
        	time: $('.time').text(),
        	currency: $(".print_show:contains('JPY')").parents('tr').find('td').eq(2).text(),
        };

        const message = currency.time +  ` 日幣買進匯率：${ currency.currency }`;

        callback(err, message);
    });
}

module.exports = getCurrency;