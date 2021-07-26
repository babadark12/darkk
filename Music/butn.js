const discord = require("discord.js");
const client = new discord.Client();
const { MessageButton } = require('discord-buttons')(Client);

module.exports = {
  name: "test",
  aliases: ["test"],
  description: "Show Gif",
  usage: "Gif",
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

buttonClient.on("yes", (inta) => inta.message.reply("Thanks, I love you :3"))
buttonClient.on("no", (inta) => inta.message.reply("WTF, you are the worst person, i have ever seen"))
