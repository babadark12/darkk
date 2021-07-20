const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "info",
  description: "INVITE BOT",
  async execute(message, args, client) {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("Bot Name", `<@${client.user.id}>`)
      .addField("Bot Developer", `@MrRobot#7265`)
      .addField("Total Guilds", `${client.guilds.cache.size}`, true)
      .addField("Total Channels", `${client.channels.cache.size}`)
      .addField("Total Users", `${client.users.cache.size}`, true)
      .addField("Bot Libary", `discord.js`)
      .setColor("#277ecd")
      .setFooter(`information about bot`);
      message.channel.send(embed);
  }
};
