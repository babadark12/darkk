const discord = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "botinfo",
  category: "info",
  description: "INVITE BOT",
  async execute(message, args, client) {
    let embed = new discord.MessageEmbed()
      .setTitle(`Rupo Inforimation`)
      .addField("Bot Name", `<@${client.user.id}>`)
      .addField("Bot Developer", `@MrRobot#7265`)
      .addField("Guilds", `${client.guilds.cache.size}`, true)
      .addField("Channels", `${client.channels.cache.size}`)
      .addField("Users", `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, true)
      .addField("Bot Libary", `discord.js`)
      .setColor("#985db3")
      message.lineReplyNoMention(embed).catch(console.error);
  }
};
