const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");
const prefix = ("+");

module.exports = {
  name: "Fun",
  aliases: ["fun", "Funny"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setColor('#116d56')
    .setDescription(`Invite RupoBot To Your Server By [click here](https://discord.com/api/oauth2/authorize?client_id=868194752619773962&permissions=8&scope=bot)\n\nThere All Fun Commands List \n\n${prefix}slap, ${prefix}hug, ${prefix}howgay,‌ ${prefix}meme, ${prefix}cry, ${prefix}kiss, ${prefix}clyde, ${prefix}captcha, ${prefix}phcomment, ${prefix}cuddle, ${prefix}joke, ${prefix}poke, ${prefix}baka, ${prefix}pat, ${prefix}punch, ${prefix}spank, ${prefix}dance, ${prefix}rate, ${prefix}advice, ${prefix}ascii, ${prefix}dicksize`)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};