const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "botlist",
  category: "admin",
  cooldown: 5,
  async execute(message, args, client) {
    let checked = "✅";
    let unchecked = "❌";

    const allbots = message.guild.members.cache
      .filter(m => m.user.bot)
      .map(m => m)
      .map(m => `${m.user.flags ? checked : unchecked} ${m.user.tag} (${m.id})`)
      .join("\n");

    const embed = new MessageEmbed()
      .setColor("#985db3")
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(allbots)
      .setFooter(client.user.tag, client.user.displayAvatarURL())
      .setTimestamp();
    message.lineReplyNoMention(embed);
  }
};
