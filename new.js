const axios = require('axios');
const {Telegraf} = require('telegraf');
const bot = new Telegraf('5990753734:AAGiucvAac0hX118Qb-pjzW925Rx17igZgA');
bot.start(function (ctx) {
    ctx.reply('Welcome')
});
bot.command('painters', async function process(ctx) {
    const response = await axios.get("https://raw.githubusercontent.com/singhsanket143/DSA_JS/2ba056616623fe92102d72c1551d34f47a176ab9/5.%20Searching/painter_partition.js");
    return ctx.reply(response.data);
})
bot.on('sticker', (ctx) => ctx.reply('❤️'));
bot.launch();
