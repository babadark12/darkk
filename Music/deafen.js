const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "deafen",
  aliases: [],
  description: "Mute A User!",
  usage: "Mute <Mention User> | <Reason>",
  async execute(message, args, client) {   
var deafuser = message.mentions.members.first();
   
    if (!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.send("You don‘t have a \`DEAFEN_MEMBERS\`");
    if (!deafuser) return message.channel.send("mention someone");
 
  if (!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send("I don‘t have a \`DEAFEN_MEMBERS\`");
   
     var embed = new Discord.MessageEmbed() 
     .setTitle("Deafen Voice")
     .addField("**Deafen user:**", deafuser)
     .addField("**Deafen by:**", `<@${message.author.id}>`)
     .setFooter(`${message.author.tag}`)
     .setTimestamp()
      deafuser.voice.setDeaf(true)
    message.channel.send(embed);
 
  }
}
