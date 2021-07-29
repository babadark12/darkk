const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: [],
  description: "Pong!",
  usage: "Ping",
  async execute(message, args, client) {
   
   

    const embed = new MessageEmbed()
      .setColor("#116d56")
      .setDescription(`Pong ${client.ws.ping} ms`)
      .setFooter(`Requested By ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    
  }
};
