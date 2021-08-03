const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");
const prefix = ("+");

module.exports = {
  name: "Music",
  aliases: ["music", "mc"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setColor('#116d56')
    .setDescription(`Invite RupoBot To Your Server By [click here](https://discord.com/api/oauth2/authorize?client_id=868194752619773962&permissions=8&scope=bot)\n\nThere All Music Commands List \n\n${prefix}filter, ${prefix}loop, ${prefix}lyrics, ${prefix}np, ${prefix}pause, ${prefix}play, ${prefix}queue, ${prefix}radio, ${prefix}remove, ${prefix}resume, ${prefix}search, ${prefix}shuffle, ${prefix}skip, ${prefix}skipto, ${prefix}stop, ${prefix}volume`)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
