const discord = require('discord.js');
const { lineReply } = require("discord-reply");

module.exports = {
  name: "rps",
  category: "fun game",
  description: "playing game",
  async execute(message, args, client) {
        let embed = new discord.MessageEmbed()
        .setColor("#116d56")
        .setTitle("RPS GAME")
        .setDescription("React to play!")
        .setTimestamp()
        let msg = await message.lineReplyNoMention(embed)
        await msg.react("🗿")
        await msg.react("✂")
        await msg.react("📜")

        const filter = (reaction, user) => {
            return ['🗿', '✂', '📜'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗿', '✂', '📜']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]})
        .then(
            async(collected) => {
                const reaction = collected.first()
         
                let result = new discord.MessageEmbed()
                .setColor("#116d56")
                .setTitle("RESULT")
                .addField("Your choice", `${reaction.emoji.name}`)
                .addField("My choice", `${me}`)
            await msg.edit(result)
          
                if ((me === "🗿" && reaction.emoji.name === "✂") ||
                (me === "📜" && reaction.emoji.name === "🗿") ||
                (me === "✂" && reaction.emoji.name === "📜")) {
                    message.reply("You lost!");
            } else if (me === reaction.emoji.name) {
                return message.reply("It's a tie!");
            } else {
                return message.reply("You won!");
            }
        })
          
        .catch(collected => {
                message.reply('Process has been cancelled since you did not respond in time!');
            })
}
}
