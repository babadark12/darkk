const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
name: "membercount",
aliases: ["whatdamembers", "count"],
description: "Check your guilds membercount!",

async execute(message, args, client) {
    const embed = new MessageEmbed()
    .setTitle("Member Count")
    .addField("⌜📚⌟・Total:", `**${message.guild.memberCount}**`)
    .addField("⌜🤖⌟・Bots", `**${message.guild.members.cache.filter(m => m.user.bot).size}**`)
    .addField("⌜🌐⌟・Users", `**${message.guild.members.cache.filter(m => !m.user.bot).size}**`)
    .setTimestamp()

    message.lineReplyNoMention(embed);
}}
