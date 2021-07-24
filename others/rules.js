const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "rules",
  aliases: [],
  description: "Pong!",
  usage: "Ping",
  async execute(message, args, client) {
   
   

    const embed = new MessageEmbed()
      .setColor("Blue")
      .setDescription(`
\`\`\`
⋘ !Rules! ⋙

1 ● Respecting the opposite personality and disrespecting him

2 ● Respecting the law of departments 

3 ● Sending a re-message is forbidden in a short time

4 ● Inappropriate names and images are forbidden when you come into the server

5 ● Publishing any kind of link is forbidden such as discord , YouTube , heted . . .

6 ● Commitment to respecting all server members 

7 ● Warn the server management team when there is any problem or misunderstanding

8 ● Using the program to change the sound to all forms
\`\`\`
`)
      .setFooter(`Requested By ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    
  }
};
