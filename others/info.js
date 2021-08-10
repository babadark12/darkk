const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");
const prefix = ("+");

module.exports = {
  name: "Info",
  aliases: ["info", "i"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setColor('#116d56')
    .setDescription(`You Can Add Me To Your Server By [click here](https://discord.com/api/oauth2/authorize?client_id=872588477391331399&permissions=8&scope=bot)\n\nThere All Info Commands List \n\n${prefix}help, ${prefix}ping, ${prefix}prefix, ${prefix}uptime, ${prefix}avatar, ${prefix}invites, ${prefix}suggest, ${prefix}userinfo, ${prefix}serverinfo, , ${prefix}serverstats, ${prefix}github, ${prefix}support, ${prefix}botinfo, ${prefix}weather, ${prefix}embed, ${prefix}allbots`)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
