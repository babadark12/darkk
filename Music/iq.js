const Discord = require("discord.js");

module.exports = {
  name: "iq",
  aliases: ["i q"],
  description: "iq",
  usage: "fun",
  async execute(message, args, client) {

const iq = Math.floor(Math.random() * 226);
const embed = new Discord.MessageEmbed()
  .setTitle(":brain: IQ Test:")
  .setDescription(":bulb: " + message.author.username + " IQ: `" + iq + "`")
  .setColor(`RANDOM`)
  .setTimestamp()
message.channel.send(embed);

} catch (err) {
    message.channel.send({embed: {
      color: 16734039,
      description: "Something went wrong... :cry:"
    }})
  }
}
}
