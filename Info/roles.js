const Discord = require("discord.js"),
moment = require('moment');

module.exports = {
  name: "roles",
  aliases: ["serverroles", 'guildroles'],
  category: "moderation",
  description: "Sets Or Changes Nickname Of An User",
  usage: "[mention | name | nickname | ID] <nickname>",
  async execute(message, args, client) {
      // Get a list of roles
      let roleCount = message.guild.roles.cache.map(x => "<@&" + x.id + ">").join(" ")

      // Return embed with list of roles
      let embed = new Discord.MessageEmbed()
      .setTitle(`Roles [${message.guild.roles.cache.size}]`)
      .setDescription(roleCount)
      .setColor("YELLOW")
      .setFooter("Server Roles")

      return message.channel.send(embed);

    },
};
