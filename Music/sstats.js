const { Client, Message, MessageEmbed } = require('discord.js');
const { lineReply } = require("discord-reply");

module.exports = {
  name: 'serverstats',
  aliases: ['stats'],
  description: "sends server info.",
  async execute(message, args, client) {
    const roleColor =
      message.guild.me.displayHexColor === "#000000"
        ? "#ffffff"
        : message.guild.me.displayHexColor;

    const embed = new MessageEmbed()
      .setTimestamp()
      .setTitle("**Some Servr Info**")
      .setColor(roleColor)
      .addField(`💤 - AFK Channel:`, `<#${message.guild.afkChannelID}>`, false)
      .addField(`💤 - AFK Timeout:`, `${message.guild.afkTimeout} seconds`, false)
      .addField(`💬 - Default Message Notifications Setting:`, message.guild.defaultMessageNotifications, false)
      .addField("💬 - Server Description:", `${message.guild.description}`, false)
      .addField("❕ - MFA Level:", message.guild.mfaLevel, false)
      .addField("⭐ - Boosts:", message.guild.premiumSubscriptionCount, false)
      .addField("📃 - Rules Channel:", message.guild.rulesChannel, false)
      .addField("✅ - Verification Level:", message.guild.verificationLevel, false)
      .addField(`:person_walking: - Weights:`, message.guild.members.cache.filter(member => !member.user.bot).size, true)
      .setFooter(`Do ${client.config.discord.prefix}serverinfo to see basic server info`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))


      .setAuthor(`${message.guild.name}`)
    message.lineReplyNoMention(embed);
  }
} 
