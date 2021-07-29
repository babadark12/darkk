const superagent = require('superagent');
const Discord = require('discord.js');
const { lineReply } = require("discord-reply");

module.exports = {
  name: "joke",
  aliases: ["jk"],
  description: "Joke text",
  usage: "jokw",
  async execute(message, args, client) {

        await superagent
        .get('http://icanhazdadjoke.com/')
        .set('Accept', 'application/json')
		   .end((err, response) => {
        let jEmbed = new Discord.MessageEmbed()
        .setTitle("Joke")
        .setDescription(response.body.joke)
        .setColor("#116d56");
        message.lineReplyNoMention(Embed);
		})
    }
}
