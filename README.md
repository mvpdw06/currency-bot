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

10. Create Procfile file

This is a file to let Heroku know what command it should run.

    > web: node index.js

＊ web is a type of process, you should use web here.

11. Deploy your code to Heroku.

## Problems I meet

1. How to stop Heroku app?

You can use Heroku-cli to command like "heroku ps:scale web=0".

    > heroku ps:scale web=0

If your process type is "worker", and you should command "heroku ps:scale worker=0".

2. Telegram bot request timeout.

Telegram bot **must** set webhook in new-bot, or your request will timeout.

    > var port = process.env.PORT || 8443;
    > var host = process.env.HOST;
    > var bot = new TelegramBot(token, { webHook: { port: port, host: host }});

## References

* https://core.telegram.org/bots
* https://neighborhood999.github.io/2016/07/19/Develop-telegram-bot/

## Special thanks

* [Larry850806](https://github.com/Larry850806) inspire me to do this bot.
* My friends [shiningjason1989](https://github.com/shiningjason1989)'s help!
