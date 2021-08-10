const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const { lineReply } = require("discord-reply");

module.exports = {
  name: "warn",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  args: true,
  description: "Warn anyone who do not obey the rules",
  async execute(message, args, client) {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.lineReplyNoMention("You should have admin perms to use this command!")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.lineReplyNoMention("Please Mention the person to who you want to warn - warn @mention <reaosn>")
    }
    
    if(message.mentions.users.first().bot) {
      return message.lineReplyNoMention("You can not warn bots")
    }
    
    if(message.author.id === user.id) {
      return message.lineReplyNoMention("You can not warn yourself")
    }
    
    if(user.id === message.guild.owner.id) {
      return message.lineReplyNoMention("You jerk, how you can warn server owner -_-")
    }
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.lineReplyNoMention("Please provide reason to warn - warn @mention <reason>")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 3) {
      return message.lineReplyNoMention(`${message.mentions.users.first().username} already reached his/her limit with 3 warnings`)
    }
    
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      await message.lineReplyNoMention(`You warned **${message.mentions.users.first().username}** for ${reason}`)
    }
    
  
  } 
} 
