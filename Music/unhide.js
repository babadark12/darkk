const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
const { MessageButton , MessageActionRow } = require(`discord-buttons`)
const { lineReply } = require("discord-reply");


module.exports = {
    name: "unhide",
    cooldown: 5,
    aliases: ["unhide"],
    usage: "unhide [#channel]",
    category: "admin",
    description : "everyone can send messages",
    async execute(message, args, client) {

	if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.lineReplyNoMention(new MessageEmbed()
	.setColor("#116d56")
	.setDescription("**You Need `MANAGE_CHANNELS` Permission To Use This Command!**")
	.setFooter(`${message.author.tag}`, message.author.avatarURL()))

        let channel = message.mentions.channels.first();
        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
        if (!channel) channel_find = message.channel;
        if (!channel_find) return;
        channel_find.updateOverwrite(message.guild.id, {
            VIEW_CHANNEL: true
        });
      message.lineReplyNoMention(`**This Channel: ${message.channel} Has Been Unhided🔓.**`)
    }
};
