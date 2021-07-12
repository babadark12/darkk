const discord = require("discord.js");

module.exports = {
  name: "about",
  category: "<:info:773053660380135424>info",
  description: "INVITE BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("> BOT NAME", `Automodv12 beta`)
      .addField(
        "> BOT DEVELOPER ",
        `
 <@551675716635328512> `
      )
      .addField(
        "TOTAL SERVER",
       `${client.guilds.cache.size}`,
        true
      )
      .addField(
         "> TOTAL CHANNAL",
        `${client.channels.cache.size}`
      )
      .addField(
        "> TOTAL USER",
        `${client.users.cache.size}`,
        true
      )
      .addField("> BOT LIBRARY", `discord.js`)

      .setColor("RANDOM")
      .setFooter(`information about bot`);

    message.channel.send(embed);
  }
};
