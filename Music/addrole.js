const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "addrole",
  aliases: ["role", "P!role"],
  category: "<:mod:789590144650051604> moderation",
  description: "Add role to any user",
  async execute(message, args, client) {
   if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("sorry you need permission to mute someone");
    }
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to AddRole");
    } 
    let target = message.mentions.members.first();
    
    if(!target) return message.reply(`mention user!`)
    
    let arole = message.mentions.roles.first();
    
    if(!arole) return message.reply(`please mention role for add!`)
    
    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    
      const embed = new MessageEmbed()
      
      .setColor("#277ecd")
      .setDescription(`changed role for ${target.user.username} added ${arole}`)
      
      await message.channel.send(embed)
      
      target.roles.add(arole)
    
  }
}
