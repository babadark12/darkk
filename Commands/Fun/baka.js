const superagent = require("snekfetch");
const Discord = require('discord.js')
const { lineReply } = require("discord-reply");

module.exports = {
  name: "baka",
  aliases: ["baka"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {
    superagent.get('https://nekos.life/api/v2/img/baka')
        .end((err, response) => {
      const embed = new Discord.MessageEmbed()
      .setTitle("BAKA!!!")
      .setImage(response.body.url)
      .setColor(`#116d56`)
      .setFooter(`idiot!`)
      .setURL(response.body.url);
  message.lineReplyNoMention(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }}));

}
}
