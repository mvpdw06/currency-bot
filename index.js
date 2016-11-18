var getCurrency = require('./getCurrency');

getCurrency(function(err, currency){
    console.log(currency);
});