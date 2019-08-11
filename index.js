const Discord = require('discord.js');
const bot = new Discord.Client();
/*token request */
const token = 'NTkyMzY0ODA1MTMwNTUxMjk2.XSJXpg.I-DcrweTzYOZDcNZS6MIrlt1lA8';

const PREFIX = '!';

var version ="0.0.3";

const usedCommandRecently = new Set();

/*when bot is online*/
bot.on('ready', () => {
    console.log('The AI is now online!');
    bot.user.setActivity('AI Engine');
    bot.user.client.setActivity('');
    bot.user.setAFK('300');
});

/*token use */
bot.login(token);