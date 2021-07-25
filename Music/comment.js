const canvacord = require('canvacord');
module.exports = {
  name: "comment",
  description: "",
  usage: "comment <text>",
  category: "fun",
  async execute(message, args, client) {
  	const comment = args.join('');
        if(!comment) return message.channel.send(`🚫 Provide something to Comment!`)
        try {    
        let yt = await canvacord.Canvas.youtube({"avatar":message.author.displayAvatarURL({format: "png"}),"username":message.author.username, "content":args.join(" ")})
        let attachment = new client.discord.MessageAttachment(yt, 'comment.png')
        message.channel.send(attachment)
    }catch(err) {
        const embed2 = new Discord.MessageEmbed()
    .setTitle(`🚫 Something went wrong.\n🚫Note : It won't work if the User contains Unwanted characters in his Username.`)
    .setColor("RANDOM")
    message.channel.send(embed2)
    }

    }
}
