const { MessageEmbed } = require("discord.js");
const prefix = ("b!");
  

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    execute(message, args, client) {
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('RANDOM')
    .setTitle("Invite Me")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=864203179947458571&permissions=8&scope=bot")
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
