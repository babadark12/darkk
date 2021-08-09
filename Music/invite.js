const Discord = require("discord.js");
const { MessageButton } = require('discord-buttons');

module.exports = {
  name: "invite",
  aliases: ["add"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {

    var embed = new Discord.MessageEmbed()
        .addField("**Weky Bot**", "All these links helps me to grow!")

    let btnInvite = new MessageButton()
        .setLabel('Premium!')
        .setStyle('url')
        .setURL('https://patreon.com/weky')

    let btnBuy = new MessageButton()
        .setLabel('Invite me!')
        .setStyle('url')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=809496186905165834&permissions=261188086870&scope=applications.commands%20bot')

    let btnJoin = new MessageButton()
        .setLabel('Support server!')
        .setStyle('url')
        .setURL('https://discord.gg/2EZSpxNB5z')

    message.channel.send({ embed: embed, components: [{ type: 1, components: [btnJoin, btnBuy, btnInvite] }] })
};
