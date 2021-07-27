const superagent = require("snekfetch");
const Discord = require('discord.js')

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
      .setColor(`RANDOM`)
      .setFooter(`idiot!`)
      .setURL(response.body.url);
  message.channel.send(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }}));

}
}
