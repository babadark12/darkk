const { MessageEmbed } = require('discord.js');
const { version } = require('@root/package.json');
const ms = require('ms');
const { lineReply } = require("discord-reply");

module.exports = {
       name: "botstats",
        description: "Pulls the serverinfo of the guild!",
        usage: " ",
        category: "info",
        accessableby: "everyone",
        aliases: ["binfo"],
    async execute(message, args, client) {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setColor(message.guild.me.displayHexColor || 'BLUE')
            .addField('General', [
                `**❯ Client:** ${client.user.tag} (${client.user.id})`,
                `**❯ Servers:** ${client.guilds.cache.size.toLocaleString()} `,
                `**❯ Users:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
                `**❯ Channels:** ${client.channels.cache.size.toLocaleString()}`,
                `**❯ Creation Date:** ${client.user.createdAt}`,
                `**❯ Version:** v1.0.0`,
                '\u200b'
            ])
            .setFooter("Bot Made By MrRobot#7265")
            .setTimestamp();

        message.lineReplyNoMention(embed);
    },
}
