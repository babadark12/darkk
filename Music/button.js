const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { MessageButton } = require("discord-buttons");
const buttonClient = new discordButtons(client);

module.exports = {
    name: "button",
    cooldown: 5,
    aliases: ["button"],
    usage: "button",
    category: "admin",
    description : "make everyone can't send messages is chat",
    async execute(message, args, client) {

     const embed = new discord.MessageEmbed()
     .setTitle("Do you like me?")
     .setColor("GREEN");

     const button1 = new buttonClient.MessageButton()
     .setLabel("Yes")
     .setStyle("green")
     .setID("yes")

     const button2 = new buttonClient.MessageButton()
     .setLabel("No")
     .setStyle("red")
     .setID("no")
 
    const button3 = new buttonClient.MessageButton()
    .setLabel("Join me on OnlyFans")
    .setURL("https://withwin.in/dbd")

     buttonClient.send(null, { channel: message.channel.id, embed, buttons: [ [button1, button2], [button3] ]})
 }
})