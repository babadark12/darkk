const discord = require("discord.js");
const { MessageButton } = require("discord-buttons");


module.exports = {
    name: "btn",
    category: "Moderation",
    aliases: [],
    description: "Adds the role to the mentioned user or ID with mentioned role or ID !!",
    example: `btn`,
    async execute(message, args, client) {

const embed = new discord.MessageEmbed()
   .setTitle("are you smart?")
   .setColor("Blue")

const yes = new MessageButton()
   .setStyle("green")
   .setLabel("Yes")
   .setID("smart")

const no = new MessageButton()
   .setStyle("red")
   .setLabel("No")
   .setID("dumbass")
   
    message.channel.send("Hello", {
     buttons: [yes, no],
     embed: embed
     })
}

