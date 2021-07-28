const Discord = require(`discord.js`);

module.exports = {
  name: "muteall",
  aliases: ["ma"],
  description: "mute all",
  usage: "mute all",
  async execute(message, args, client) {
        const channel = message.member.voice.channel;

        if (!channel) return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`❌ ${message.author.username}, you are not in a voice channel`)
            .setColor(`#0d2943`));

        for (const member of channel.members) {
            member[1].voice.setMute(true);
        }

        return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`:mute: Muted all participants`)
            .setColor(`#0d2943`));
    }
};
