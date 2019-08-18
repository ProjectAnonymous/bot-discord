const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  const embed = new MessageEmbed()
    .setDescription(message.guild.name)
    .setThumbnail(message.guild.iconURL())
    .addField("Membres", message.guild.memberCount, true)
    .addField("Owner", message.guild.owner.user.tag, true)
    .setImage(message.guild.owner.user.avatarURL());
  message.channel.send(embed);
};