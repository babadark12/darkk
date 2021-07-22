const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "channels",
  aliases: ["chcount", "channelS"],
 
  async execute(message, args, client) {

let channels = message.guild.channels.cache.map(r => `> ${r.name} `).join("\n"); 
 let embed = new Discord.MessageEmbed()
  .setTitle("Server Channels") 
  .setDescription(" ```javascript\n" + channels + "``` ");
  message.channel.send(embed); 

  { 
 let channels = new Discord.MessageEmbed()
  .setTitle(`Command: channels`)
  .addField("__Usage--", `\`${prefix}channels\``) 
 .addField("__Information__", "\`Show All Channels For Server\`");
  message.channel.send(channels);

        }
     }
  }
