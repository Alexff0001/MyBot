const discord = require('discord.js');
const bot = new discord.Client({disableEveryone: true});

bot.on('ready', () =>
{
console.log('Bot Started!');
});
bot.on('message', (message) =>
{
    if (/<@!289232386158362624>|<@289232386158362624>/.test(message.content)) {
        return message.reply('**Не тегай лидера!** Лучше будет спросить 9ок (замов лидера) или 8.5. *У лидера много дел и ему не до тегов!*');
    }
    if (/<@!833341682106892308>|<@833341682106892308>/.test(message.content)) {
        return message.reply('**Зачем ты тегаешь бота?** *Ты бот?*');
    }
 })

bot.login('ODMzMzQxNjgyMTA2ODkyMzA4.YHw76w.D0TQMqdqXVL3bz0H4DGj5tPDt4w'); 