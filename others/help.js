const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "6",
  aliases: ["7"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setColor('#116d56')
    .setTitle("Need Help? Here Are All Commands For Useing")
    .setDescription(`Invite RupoBot to your server by [click here](https://discord.com/api/oauth2/authorize?client_id=868194752619773962&permissions=8&scope=bot)\n\nTo view each part of the commands \n\n+Other +Gifs +Picture +Fun +Game +Text +Moderation +Backup\nNeed More Help? Join [our server](https://discord.gg/A6R2CJENGn)Our channel on [Youtube]()If you have any quesstion send message for MrRobot#7265`)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
