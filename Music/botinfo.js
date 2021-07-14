const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "info",
  description: "INVITE BOT",
  async execute(message, args, client) {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("BOT NAME", `${client.user.tag}`)
      .addField("BOT DEVELOPER ", `@Ragnar{}#6067`)
      .addField("TOTAL SERVER", `${client.guilds.cache.size}`, true)
      .addField("TOTAL CHANNAL", `${client.channels.cache.size}`)
      .addField("TOTAL USER", `${client.users.cache.size}`, true)
      .addField("BOT LIBRARY", `discord.js`)
      .setColor("RANDOM")
      .setFooter(`information about bot`);
      message.channel.send(embed);
  }
};
