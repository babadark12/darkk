const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");
const prefix = ("+");

module.exports = {
  name: "other",
  aliases: ["o"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setColor('#116d56')
    .setDescription(`This Is Full Other Commands For Use Command +<command>.\n\n To Invite Me [click here](https://discord.com/api/oauth2/authorize?client_id=868194752619773962&permissions=8&scope=bot) - Come Join Our Server [click here](https://discord.gg/A6R2CJENGn)`)
    .addField("Other Commands", `${prefix}help, ${prefix}ping, ${prefix}prefix, ${prefix}uptime, ${prefix}avatar, ${prefix}invites, ${prefix}suggest, ${prefix}userinfo, ${prefix}serverinfo, ${prefix}github, ${prefix}support, ${prefix}botinfo, ${prefix}weather, ${prefix}embed`)
    .setFooter(`${message.author.tag}`, message.author.avatarURL)
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
