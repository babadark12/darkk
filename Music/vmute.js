const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "vmute",
  aliases: [],
  description: "",
  usage: "",
  async execute(message, args, client) {
var mute = message.mentions.members.first();
   
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don‘t have enough permission to do it");
    if (!mute) return message.channel.send("please mention someone to vmute");
 
  if (!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send("I don‘t have enough permission to do it");
    var muteEmbed = new Discord.MessageEmbed() 
    .setTitle("Mute Voice")
    .addField("Muted user", mute)
    .setFooter(`Muted by ${message.author.tag}`)
    .setTimestamp()
      mute.voice.setMute(true)
    message.channel.send(muteEmbed);
 
  }
}
