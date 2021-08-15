const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")
const { lineReply } = require("discord-reply")
const db = require('quick.db');
const { MessageButton , MessageActionRow } = require
 ("discord-buttons")
 
module.exports = {
    name: "hide",
    cooldown: 5,
    aliases: ["hide"],
    usage: "hide [#channel]",
    category: "admin",
    description : "make everyone can't view channel",
    async execute(message, args, client) {

if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.lineReplyNoMention(
new MessageEmbed()
.setColor("#FF0000")
.setDescription("**You Need `MANAGE_CHANNELS` Permission To Use This Command!**")
.setFooter(`${message.author.tag}`, message.author.avatarURL()))
        let channel = message.mentions.channels.first();
        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
        if (!channel) channel_find = message.channel
        if (!channel_find) return;
        channel_find.updateOverwrite(message.guild.id, {
            VIEW_CHANNEL: false
        });
        message.lineReplyNoMention(`**This Channel: ${message.channel} Has Been Hided🔒.**`)
 
	
    }
};
