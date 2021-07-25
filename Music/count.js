const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "membercount",
  aliases: ["count", "infocount"],
  category: "count",
  async execute(message, args) {
    const Members = message.guild.memberCount;
    const bots = message.guild.members.cache.filter(
      member => member.bot === true
    ).size;
    const humans = message.guild.members.cache.filter(
      member => !member.user.bot
    ).size;
    const online = message.guild.members.cache.filter(
      member => member.presence.status === "online"
    ).size;
    const offline = message.guild.members.cache.filter(
      member => member.presence.status === "offline"
    ).size;
    const dnd = message.guild.members.cache.filter(
      member => member.presence.status === "dnd"
    ).size;
    const idle = message.guild.members.cache.filter(
      member => member.presence.status === "idle"
    ).size;

    const embed = new MessageEmbed()
      .setColor(`#0d2943`)
      .setTitle(`Members Information`)
      .addField(`**All Members**`, Members)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setAuthor(`${message.guild.name}`)
      .setTimestamp();

    message.channel.send(embed);
  }
};
