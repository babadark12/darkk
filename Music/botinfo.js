const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "info",
  description: "INVITE BOT",
  async execute(message, args, client) {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("Bot Name", `<@${bot.user.id}>`)
      .addField("Bot Developer", `@MrRobot#7265`)
      .addField("Total Guilds", `${bot.guilds.cache.size}`, true)
      .addField("Total Channels", `${bot.channels.cache.size}`)
      .addField("Total Users", `${bot.users.cache.size}`, true)
      .addField("Bot Libary", `discord.js`)
      .setColor("#277ecd")
      .setFooter(`information about bot`);
      message.channel.send(embed);
  }
};
