const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "roles",
  aliases: [],
 
  async execute(message, args, client) {

let roles = message.guild.roles.cache.map(r => `> ${r.name} `).join("\n"); 
 let embed = new Discord.MessageEmbed()
  .setTitle("Server Roles") 
 .setDescription(" ```javascript\n" + roles + "``` ");
  message.channel.send(embed); 

  { 
 let roles = new Discord.MessageEmbed()
  .setTitle(`Command: roles `)
  .addField("Usage", `${prefix}roles`) 
 .addField("Information", "Show All Roles For Server");
  message.channel.send(roles);

        }
     }
  }
