const db = require("quick.db")
const { PREFIX } = require("../../config.json")
let reset = { PREFIX }
const { lineReply } = require("discord-reply");

module.exports = {
  name: "prefix",
  category: "moderation",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  async execute(message, args, client) {    
    //PERMISSION
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.lineReplyNoMention("**❌are not allowed or do not have permission to change prefix**")
    }
    
    if(!args[0]) {
      return message.lineReplyNoMention("Please give the prefix that you want to set")
    } 
    
    if(args[1]) {
      return mmessage.lineReplyNoMention("You can not set prefix a double argument")
    }
    
    if(args[0].length > 3) {
      return message.lineReplyNoMention("You can not send prefix more than 3 characters")
    }
    
    if(args.join("") === reset) {
      db.delete(`prefix_${message.guild.id}`)
     return await message.lineReplyNoMention("Reseted Prefix ✅")
    }
    
    db.set(`prefix_${message.guild.id}`, args[0])
  await message.lineReplyNoMention(`Seted Bot Prefix to ${args[0]}`)
    
  }
}
