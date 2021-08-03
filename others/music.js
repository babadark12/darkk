const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");
const prefix = ("+");

module.exports = {
  name: "music",
  aliases: ["mc"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setColor('#116d56')
    .setDescription(`To Invite Rupo To Your Server [click here](https://discord.com/api/oauth2/authorize?client_id=868194752619773962&permissions=8&scope=bot) - Need more help? join Our Server [click here](https://discord.gg/A6R2CJENGn) \n\nThere All Music Commands List \n\n${prefix}filter, ${prefix}loop, ${prefix}lyrics, ${prefix}np, ${prefix}pause, ${prefix}play, ${prefix}queue, ${prefix}radio, ${prefix}remove, ${prefix}resume, ${prefix}search, ${prefix}shuffle, ${prefix}skip, ${prefix}skipto, ${prefix}stop, ${prefix}volume`)
    .setFooter(`${message.author.tag}`, message.author.avatarURL)
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
