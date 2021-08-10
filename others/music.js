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
    .addField("Music", `${prefix}filter, ${prefix}loop, ${prefix}lyrics, ${prefix}np, ${prefix}pause, ${prefix}play, ${prefix}queue, ${prefix}radio, ${prefix}remove, ${prefix}resume, ${prefix}search, ${prefix}shuffle, ${prefix}skip, ${prefix}skipto, ${prefix}stop, ${prefix}volume`)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
