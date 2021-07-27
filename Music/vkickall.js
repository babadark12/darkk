const discord = require("discord.js");

module.exports = {
  name: "vkick-all",
  aliases: ["vkick-all"],
  description: "Show Gif",
  usage: "vkick all",
  async execute(message, args, client) {
   
  
 if (!message.member.hasPermission("UNMUTE_MEMBERS"))
     {
      return;
    }
  let channel = message.member.voice.channel;
        for (let member of channel.members) {
            member[1].voice.setChannel(null)
        }
        message.channel.send("Done i have kicked all persons who were in your vc")
  }
    }
