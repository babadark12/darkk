const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "addrole",
  aliases: ["role", "P!role"],
  category: "moderation",
  description: "Add role to any user",
  async execute(message, args, client) {
   if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("sorry you need permission to Adding Role To someone");
    }
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to mute");
    } 
    let target = message.mentions.members.first();
    
    if(!target) return message.reply(`please mention user!`)
    
    let arole = message.mentions.roles.first();
    
    if(!arole) return message.reply(`please mention role for add!`)
          
     message.channel.send(`changed role for ${target.user.username} added ${arole}`)      
      
      target.roles.add(arole)
    
  }
}
