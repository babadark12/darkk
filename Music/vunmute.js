const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "vunmute",
  aliases: [],
  description: "",
  usage: "",
  async execute(message, args, client) {
var muteUser = msg.mentions.members.first();
   
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You don‘t have enough permission to do it");
    if (!muteUser) return msg.channel.send("please mention someone to vunmute");
 
  if (!msg.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return msg.channel.send("I don‘t have enough permission to do it");
    var muteEmbed = new Discord.MessageEmbed() 
    .setTitle("Unmute Voice")
    .addField("Unmute user", muteUser)
    .setFooter(`Unmuted by ${msg.author.tag}`)
    .setTimestamp()
     muteUser.voice.setMute(false)
    msg.channel.send(muteEmbed);
 
  }
}
