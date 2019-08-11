const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.channel.send('Pong!');

});

client.login('NjEwMDk1NzA3NTcwOTYyNDYz.XVASDw.wXPfVpQXSVoW9udB3kLRj7dAXqw');