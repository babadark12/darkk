const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "ping",
  aliases: [],
  description: "Pong!",
  usage: "Ping",
  async execute(message, args, client) {
   
   

    const embed = new MessageEmbed()
      .setColor("#FF0000")
      .setDescription(`Pong ${client.ws.ping} ms`)
      .setFooter(`Requested By ${message.author.username}`)
      .setTimestamp();

    mmssage.lineReplyNoMention(embed);

    
  }
};
