const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "rate",
  aliases: [],
  description: "Bot Rate Your Given Thing!",
  usage: "Rate <Text>",
  async execute(message, args, client) {
   
    let Content = args.join(" ");

    if (!Content)
      return message.channel.send(`Please Give Me Something To Rate!`);

    let embed = new Discord.MessageEmbed()
      .setColor("black")
      .setTitle(`I Rate`)
      .setDescription(`${Math.floor(Math.random() * 11)}/10 To ${Content}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    
  }
};
