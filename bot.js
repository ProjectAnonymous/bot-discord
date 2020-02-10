const Discord = require('discord.js')
const client = new Discord.Client()



client.on('ready', () => {
    console.log("Ticket Bot is online !");
    client.user.setActivity('N.E.X.U.S Discord', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
});

client.on('message', message => {
    if(message.author.bot) 
        return;
    let embed = new Discord.RichEmbed();
    embed.setTitle("Create a Support Ticket");
    embed.setDescription("React to this message to open a support ticket with the Server Administrators");
    embed.setColor("#B900FF");
    embed.setTimestamp();
    embed.setFooter("Ticket Bot System v-1.0.0 2020");
    if (message.content.startsWith("*help")) 
    {
        var TicketSupport = client.channels.get("674292428030869516"); // ticket-support Channel
        TicketSupport.send(embed)
        .then(message => message.channel.react(':tickets:'))
        .catch(err => console.log(err));
    }
});

client.on('raw', payload => {
   let eventName = payload.t;
   if(eventName === 'MESSAGE_REACTION_ADD') {
        
   }

});

client.on('messageReactionAdd', (reaction, user) => {
    console.log(user.username + " reacted.");


})

client.login('NjY3OTYyNDA0NjYzMTk3Njk2.XjmSTg.qLTixalUAVqbwrVIWAFBO2QRN5g');
