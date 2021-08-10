const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");
const prefix = ("+");

module.exports = {
  name: "Moderation",
  aliases: ["moderation", "mod"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setColor('#116d56')
    .setDescription(`You Can Add Me To Your Server By [click here](https://discord.com/api/oauth2/authorize?client_id=872588477391331399&permissions=8&scope=bot)`)
    .addField("Moderation", `${prefix}lock, ${prefix}unlock, ${prefix}ban, ${prefix}unban, ${prefix}bans, ${prefix}vkick, ${prefix}purge, ${prefix}emojilist, ${prefix}kick, ${prefix}warn, ${prefix}cinvite, ${prefix}channelinfo, ${prefix}channels, ${prefix}roleinfo, ${prefix}lockdown, ${prefix}tempban, , ${prefix}tempmute, ${prefix}serverlock, ${prefix}serverunlock, ${prefix}addrole, ${prefix}rmvrole`)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
