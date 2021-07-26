const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")
const { lineReply } = require("discord-reply")
const db = require('quick.db');
const { MessageButton , MessageActionRow } = require
 ("discord-buttons")
 
module.exports = {
    name: "lockall",
    cooldown: 5,
    aliases: ["lock"],
    usage: "lock [#channel]",
    category: "admin",
    description : "make everyone can't send messages is chat",
    async execute(message, args, client) {

if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.lineReplyNoMention(
new MessageEmbed()
.setColor("RED")
.setDescription("**You Need `MANAGE_CHANNELS` Permission To Use This Command!**")
.setFooter(`${message.author.tag}`, message.author.avatarURL()))
        if (!channel) channels_find = message.channels
        if (!channel_find) return;
        channels_find.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: false
        });
        message.lineReplyNoMention(`**🔒 All Channel Locked**`)
 
	
    }
};
