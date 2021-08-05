const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setColor('#116d56')
    .setDescription(`Invite Loser Bot to your server by [click here](https://discord.com/api/oauth2/authorize?client_id=872588477391331399&permissions=8&scope=bot)\n\nNeed Help? This is part of the commands \n\n+Info +Gifs +Pic +Fun +Game +Text +Moderation +Backup +Music\n\nNeed More Help? Join [our server](https://discord.gg/A6R2CJENGn) \nOur channel on [Youtube](https://youtube.com/channel/UC_EfAg6_maZeTyQN2T-0pzg) \nIf you have any quesstion send message for deko#7265`)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
