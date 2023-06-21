require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
const userBot = new Telegraf(process.env.BOT_TOKEN2);

bot.start((ctx) => ctx.reply('Я Бот'));
bot.help((ctx) => ctx.reply('Напиши: Привет, Хочу чат, СПС'));
bot.hears('Привет', (ctx) => ctx.reply('И тебе'));
bot.hears('Хочу чат', (ctx) => ctx.reply('Чат готов'));
bot.hears('СПС', (ctx) => ctx.reply('ПЖЛСТ'));
bot.on('text', ctx => {
    ctx.reply('Не понял')
})
bot.launch();

userBot.start((ctx) => ctx.reply('Я пользователь'));
userBot.help((ctx) => ctx.reply('Напиши: Чат готов'));
userBot.hears('Чат готов', (ctx) => ctx.reply('Спасибо'));
userBot.on('text', ctx => {
    ctx.reply('Хочу чат')
})
userBot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

process.once('SIGINT', () => userBot.stop('SIGINT'));
process.once('SIGTERM', () => userBot.stop('SIGTERM'));