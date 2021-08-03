const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");
const prefix = ("+");

module.exports = {
  name: "Other",
  aliases: ["other", "o"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setColor('#116d56')
    .setDescription(`To Invite Rupo To Your Server [click here](https://discord.com/api/oauth2/authorize?client_id=868194752619773962&permissions=8&scope=bot) - Need more help? join Our Server [click here](https://discord.gg/A6R2CJENGn) \n\nThere All Other Commands List \n\n${prefix}help, ${prefix}ping, ${prefix}prefix, ${prefix}uptime, ${prefix}avatar, ${prefix}invites, ${prefix}suggest, ${prefix}userinfo, ${prefix}serverinfo, ${prefix}github, ${prefix}support, ${prefix}botinfo, ${prefix}weather, ${prefix}embed`)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
