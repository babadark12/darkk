const discord = require("discord.js");
const client = new discord.Client();
const { MessageButton , MessageActionRow } = require
 ("discord-buttons")

module.exports = {
    name: "buton",
    cooldown: 5,
    aliases: ["bt"],
    usage: "button",
    category: "Music",
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
