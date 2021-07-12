const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { PREFIX } = require(`../config.json`);

module.exports = {
  name: "info",
  aliases: ["i"],
  description: "Display all commands and descriptions",
  execute(message, args, client) {
    
     const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setAuthor("About Ness Bot.", "https://cdn.discordapp.com/avatars/844069682545164289/b40e8a61cbeb7a6319b5050238a9aa03.png?size=1024")
    .setThumbnail(`https://cdn.discordapp.com/avatars/844069682545164289/b40e8a61cbeb7a6319b5050238a9aa03.png?size=1024`)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .addField("**Name** : ", `${client.user.tag} `, true)
    .addField("**ID Bot** : ", ` ${client.user.id} `, true)
    .addField("**Version** : ", `${process.version}`, true)
    .addField("**Prefix Bot** : ", `${prefix}`, true)
    .addField('**My Ping**' , `${client.ws.ping}` , true)
    .addField("**Servers** : ", `${client.guilds.cache.size}`, true)
    .addField("**Users** : ", `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, true)
    .addField("**Channels** : ", `${client.channels.cache.size}`, true)
    .addField("**Owners Bot** : ", `Dark`, true)

    //send the Message
    message.channel.send(embed)

  }
} 
