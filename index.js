const Discord = require('discord.js');
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client();

client.on('ready', () => {
  console.log("Nexus Is now Online!");
});

client.on('message', msg => { 
  if (msg.content.startsWith('${PREFIX}ping')) msg.channel.send("Pong!");
  if (msg.content.startsWith('${PREFIX}pong')) msg.channel.send("Ping!");
});

client.login(TOKEN);