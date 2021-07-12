const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { PREFIX } = require(`../config.json`);

module.exports = {
  name: `about`,
  description: `Gives you the uptime of the Bot`,
  aliases: [],
  cooldown: 5,
  edesc: "With that you can see how long the Bot has been running nonstop",
  execute(message, args, client) {
    
const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor("About")
    .setThumbnail(``)
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

   
    message.channel.send(embed)

  }
}
