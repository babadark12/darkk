const Discord = require("discord.js");
const superagent = require("snekfetch");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "poke",
  aliases: ["pk"],
  description: "poke image",
  usage: "poke",
  async execute(message, args, client) {
            const user = message.mentions.users.first();
            if(!user)
                return message.channel.send({embed: {
                color: 16734039,
                description: "You must mention someone to poke!"
            }})

		if (message.author === user) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "You cant poke yourself!"
            }})
		}
            superagent.get('https://nekos.life/api/v2/img/poke')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setTitle(user.username + " just got poked by " + message.author.username)
              .setImage(response.body.url)
              .setColor("#0d2943")
              .setDescription((user.toString() + " got poked by " + message.author.toString()))
              .setFooter(`rip`)
              .setURL(response.body.url);
          message.lineReplyNoMention(embed);
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }}));

        }
      }
