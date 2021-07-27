const db = require("quick.db");
const Discord = require("discord.js")
const { lineReply } = require("discord-reply");

module.exports = {
  name: "anti-link",
  aliases: ["anti-link"],
  description: "anti link <off,on>",
  usage: "anti-link off/on",
  async execute(message, args, client) {

     let embed = db.fetch(`embed_${message.guild.id}`);
    
    if (!message.member.hasPermission("MANAGE_GUILD"))
    {
       message.channel.send(
        "**❌ You need** `MANAGE GUILD` **to configure the anti link settings!**"
      );
      return;
}
    let content = args[0];
  
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = "+";
    }
      if(!content)
    {
      message.lineReplyNoMention(`**🚫 You didnt gave me an on or off option e.g - ${prefix}antilink on/off**`);
      return;
    }
    if (content.toLowerCase() === "on") 
    {
       let antilink1 = db.fetch(`antilink_${message.guild.id}`);
      if(antilink1 == "on")
      {
        message.lineReplyNoMention(`**You have already turned on the antilink**`);
        return;
      }
      let on1 = "on";
      db.set(`antilink_${message.guild.id}`, on1);
      message.lineReplyNoMention(`**✅Ok now i will Delete the message when someone sends the link in chat**`);
    }
     else if (content.toLowerCase() === "off") 
    {
        let antilink1 = db.fetch(`antilink_${message.guild.id}`);
      if(antilink1 == "off")
      {
        message.lineReplyNoMention(`**You have already turned off the antilink**`);
        return;
      }
      let off1 = "off";
      db.set(`antilink_${message.guild.id}`, off1);
      message.lineReplyNoMention(`**✅Ok now i will not Delete the message when someone sends the link in chat**`);
    }
    else {
      return message.lineReplyNoMention(`**⛔You didnt gave me on or off**`);
    }
    }
}
