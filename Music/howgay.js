const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "howgay",
  aliases: ["gay"],
  description: "Show How Gay Member Is!",
  usage: "Howgay <Mention Member>",
  async execute(message, args, client) {
 
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = Math.floor(Math.random() * 101);

    let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Gay Machine`)
      .setDescription(`${Member.user.username} Is ${Result}% Gay 🏳️‍🌈`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    
  }
};
