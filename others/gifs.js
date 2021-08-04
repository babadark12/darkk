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
    .setDescription(`Invite Loser Bot To Your Server By [click here](https://discord.com/api/oauth2/authorize?client_id=868194752619773962&permissions=8&scope=bot)\n\nThere All Gif Commands List \n\n${prefix}boy, ${prefix}girl, ‌${prefix}couple, ${prefix}anime, ${prefix}emoji, ${prefix}animal, ${prefix}neon`)
    .setFooter(`${message.author.tag}`, message.author.avatarURL)
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
