const Discord = require('discord.js');
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client();


client.on("message", msg => { 
  if(msg.author.bot) return;
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === `${PREFIX}ping`) msg.channel.send("Pong!");
  if (cmd === `${PREFIX}pong`) msg.channel.send("Ping!");
  if (cmd === `${PREFIX}repeat`) {
    msg.channel.send(args.join(" "));
    msg.delete({ timeout: 3000 }).then(msg => console.log("Un Message à été Supprimé"));
  }
if (cmd === `${PREFIX}role`) {
  const channel = client.channels.find(r => r.name === "logs");
  const role = msg.guild.roles.find(r => r.name === args[0]);
  if (!role) return msg.channel.send("Ce rôle n'existe pas !");
  if (msg.member.roles.find(r => r.name === args[0])) {
    msg.member.roles.remove(role);
    channel.send(`J'ai supprimé le rôle ${role} à ${msg.author}.`);
    msg.delete({ timeout: 3000 });
  } else{
    msg.member.roles.add(role);
    channel.send(`J'ai ajouté le rôle ${role} à ${msg.author}.`);
    msg.delete({ timeout: 3000 });
  }
}
});

client.on("guildMemberAdd", member => {
  member.send("Salut à toi");
  const channel = client.channels.find(r => r.name === "general-talk");
  channel.send(`${member} just join the server!`);
});


client.login(TOKEN);

client.on("ready", () => console.log("Nexus Is now Online!"));
client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);
