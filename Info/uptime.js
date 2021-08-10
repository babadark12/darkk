const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "uptime",
  category: "info",
  description: "Shows Bot's Uptime.",
  usage: "uptime",

  async execute(message, args, client) {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    
    return message.lineReplyNoMention(`Uptime:\n\n${days}d ${hours}h ${minutes}m ${seconds}s`);
  }
  
}
