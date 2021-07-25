const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
const { MessageButton , MessageActionRow } = require(`discord-buttons`)
const { lineReply } = require("discord-reply");


module.exports = {
    name: "bans",
    cooldown: 5,
    aliases: ["bans"],
    usage: "bans",
    category: "admin",
    description : "To show all server bans",
    async execute(message, args, client) {
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.lineReplyNoMention(new MessageEmbed()
	.setColor("RED")
	.setDescription(`**You Need** \`ADMINISTRATOR\` **Permission To Use This Command!**`)
	.setFooter(`${message.author.tag}`, message.author.avatarURL()))
if (!message.channel.guild) return;
		message.channel;
		message.guild.fetchBans().then(bans =>
message.lineReplyNoMention (new MessageEmbed()
.setAuthor(message.guild.name, message.guild.iconURL())
.setColor("BLUE")
.addField("Total Ban's Is", `\`${bans.size}\``)
.setFooter(`${message.author.tag}`, message.author.avatarURL()))).catch(console.error);
    }
};
