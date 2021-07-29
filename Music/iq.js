const Discord = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "iq",
  aliases: [" iq"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {
try {

const iq = Math.floor(Math.random() * 226);
const embed = new Discord.MessageEmbed()
  .setTitle(":brain: IQ Test:")
  .setDescription(":bulb: " + message.author.username + " IQ: `" + iq + "`")
  .setColor(`#116d56`)
  .setTimestamp()
message.lineReplyNoMention(embed);

} catch (err) {
    message.channel.send({embed: {
      color: 16734039,
      description: "Something went wrong... :cry:"
    }})
  }
}
}
