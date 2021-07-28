const { MessageEmbed, Message, Client } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "info",
  aliases: ["i"],
  description: "Show info bot creator",
  usage: "info",
  async execute(message, args, client) {
        const embed = new MessageEmbed()
        .setTitle("Akeno Info")
        .addField("Creator:", "MrRobot#7265")
        .addField("Youtube:", "[click here](https://youtube.com/channel/UC_EfAg6_maZeTyQN2T-0pzg)")
        .addField("Discord:", "[click here](https://discord.gg/mjyZB4deSh)")
        .addField("Language:", "discord.js")
        .setFooter("To View List Of Command Type +help")
        .setColor("#0d2943")
       message.lineReplyNoMention(embed);

}}
