const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mvall",
  aliases: [],
  description: "move all member!",
  usage: "move all",
  async execute(message, args, client) {

  if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

   if (message.member.voiceChannel == null)
      return message.channel.send(`**Go to voice and write the command**`);
    var author = message.member.voiceChannelID;
    var m = message.guild.members.cache.filter(m => m.voiceChannel);
    message.guild.members.cache
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      });
    message.channel.send(`✅ **All in the voice moved to your voice**`);
  }
};
