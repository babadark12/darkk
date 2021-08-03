const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");
const prefix = ("+");

module.exports = {
  name: "moderation",
  aliases: ["mod", "m"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setColor('#116d56')
    .setDescription(`To Invite Rupo To Your Server [click here](https://discord.com/api/oauth2/authorize?client_id=868194752619773962&permissions=8&scope=bot) - Need more help? join Our Server [click here](https://discord.gg/A6R2CJENGn) \n\nThere All Moderation Commands List \n\n${prefix}lock, ${prefix}unlock, ${prefix}ban, ${prefix}unban, ${prefix}emojiinfo, ${prefix}se, ${prefix}bans, ${prefix}vkick, ${prefix}clear, ${prefix}emojilist, ${prefix}kick, ${prefix}warn, ${prefix}cinvite, ${prefix}channelinfo, ${prefix}channels, ${prefix}roleinfo, ${prefix}lockdown, ${prefix}tempban, , ${prefix}tempmute, ${prefix}serverlock, ${prefix}serverunlock, ${prefix}addrole, ${prefix}rmvrole`)
    .setFooter(`${message.author.tag}`, message.author.avatarURL)
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
