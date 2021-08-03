const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "Text",
  aliases: ["text", " text", " Text"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setColor('#116d56')
    .setDescription(`To Invite Rupo To Your Server [click here](https://discord.com/api/oauth2/authorize?client_id=868194752619773962&permissions=8&scope=bot) - Need more help? join Our Server [click here](https://discord.gg/A6R2CJENGn) \n\nThere All Text Commands List \n\n${prefix}textkurdish, ${prefix}textarabic, ${prefix}textenglish, ${prefix}textturkish, ${prefix}textpersian`)
    .setFooter(`${message.author.tag}`, message.author.avatarURL)
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
