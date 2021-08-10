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
    .addField("Info", `${prefix}help, ${prefix}ping, ${prefix}prefix, ${prefix}uptime, ${prefix}avatar, ${prefix}invites, ${prefix}suggest, ${prefix}userinfo, ${prefix}serverinfo, , ${prefix}serverstats, ${prefix}github, ${prefix}support, ${prefix}botinfo, ${prefix}weather, ${prefix}embed, ${prefix}allbots, ${prefix}se, ${prefix}emojiinfo`)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
