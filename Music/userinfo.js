const discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const { lineReply } = require("discord-reply");

module.exports = {
  name: "userinfo",
  aliases: [],
  description: "Show User Information!",
  usage: "Userinfo | <Mention User>",
  async execute(message, args, client) {
    
    let member = message.mentions.users.first() || message.member;

    const statuses = {
      online: "Online",
      dnd: "Do Not Disturb",
      idle: "Idle",
      offline: "Offline/Invisible"
    };

    const embed = new MessageEmbed()
      .setTitle(member.user.username + " Information!")
      .setColor("#0d2943")
      .setThumbnail(member.user.displayAvatarURL())
      .addField("Full Name", member.user.tag, true)
      .addField("ID", `${member.id}`, true)
      .addField("Status", statuses[member.presence.status], true)
      .addField(
        `Roles Count`,
        message.guild.members.cache.get(member.user.id).roles.cache.size ||
          "No Roles!",
        true
      )
      .addField(`Avatar Url`, `[Link](${member.user.displayAvatarURL()})`, true)
      .addField("Joined Server At", member.joinedAt.toDateString())
      .addField("Joined Discord At", member.user.createdAt.toDateString())
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.lineReplyNoMention(embed).catch(console.error);

   
  }
};
