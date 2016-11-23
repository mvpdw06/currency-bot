# Telegram currency bot

Try to create a Telegram bot to auto get current Japan currency and reply.

## Base

Base on Node.js

## Dependencies

1. [request](https://github.com/request/request)
2. [cheerio](https://github.com/cheeriojs/cheerio)
3. [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)
4. [heroku-cli](https://github.com/heroku/cli) && settings

## Description

1. Send request && get currency what we want

    Request plugin can let you send request to web pages, and we use cheerio to find HTML element what we want like jQuery. After get data we want, we export result like a module.

2. Create Telegram account
3. Create your Telegram bot from [@BotFather](https://telegram.me/BotFather).
4. Get your Telegram bot token.
5. Test your bot API in browser. ([API document](https://core.telegram.org/bots/api/))

    > https://api.telegram.org/bot{token}/getme

6. Get current currency and send Message by Telegram bot.
7. Create Heroku account.
8. Create Heroku app.
9. Use Heroku enviroment config to replace your bot token, channel ID, chat ID...what you want to hide or should not open to public. (**Yuo need not to install any things, after deploy it will work perfectly.**)

    > process.env.token

10. Integrate get-currency and Telegram-bot
11. Set schedule to run your code.

    ```
    setInterval(function(){ 
        // your code here. 
    }, period);
    ```

12. Create Procfile file 

    This is a file to let Heroku know what command it should run.

    ```
    clock: node index.js
    ```

    ＊ clock is a type of process. Because our process is a running on schedule process, so we should use clock.

11. Deploy your code to Heroku.

## Problems I meet

1. How to start or stop Heroku app?

    You can use Heroku-cli to command "heroku ps:scale clock=1 --app APP_Name" to start your app.

    ```
    heroku ps:scale clock=1 --app APP_Name
    ```

    So you can command "heroku ps:scale clock=0 --app APP_Name" to stop your app.

    ```
    heroku ps:scale clock=0 --app APP_Name
    ```

    If your process type is "worker", and you should command "heroku ps:scale worker=0 --app APP_Name".
    Similarly, if your process type is "web", and you should command "heroku ps:scale web=0 --app APP_Name".

2. Telegram bot request timeout.

    Telegram bot **must** set webhook in new-bot, or your request will timeout.

    ```
    var port = process.env.PORT || 8443;
    var host = process.env.HOST;
    var bot = new TelegramBot(token, { webHook: { port: port, host: host }});
    ```

3. Heroku Server will turn to sleep mode, when your code is do nothing.

    > Solution: turn process type from web or worker to clock.

    When your app receives no traffic in a 30 minute period, the your app will sleep.


## References

* https://core.telegram.org/bots
* https://neighborhood999.github.io/2016/07/19/Develop-telegram-bot/

## Special thanks

* [Larry850806](https://github.com/Larry850806) inspire me to do this bot.
* My friends [shiningjason1989](https://github.com/shiningjason1989)'s help!
