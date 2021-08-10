const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");
const prefix = ("+");
module.exports = {
  name: "Gifs",
  aliases: ["gifs", "g", "gif"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setColor('#116d56')
    .addField("Gifs", `${prefix}boy, ${prefix}girl, ‌${prefix}couple, ${prefix}anime, ${prefix}emoji, ${prefix}animal, ${prefix}neon`)
    .setFooter(`${message.author.tag}`, message.author.avatarURL)
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
