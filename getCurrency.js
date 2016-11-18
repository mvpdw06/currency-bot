var request = require('request');
var cheerio = require('cheerio');

function getCurrency(callback){
    var url = 'http://rate.bot.com.tw/xrt?Lang=zh-TW';
    request(url, function(err, res, body){
        var $ = cheerio.load(body);

        var currency = {
        	time: $('.time').text(),
        	currency: $(".print_show:contains('JPY')").parents('tr').find('td').eq(2).text(),
        };

        var message = currency.time +  " 日幣買進匯率：" + currency.currency;

        callback(err, message);
    });
}

module.exports = getCurrency;