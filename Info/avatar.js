const Discord = require('discord.js');
const { lineReply } = require("discord-reply");

module.exports = {
        name: 'avatar',
        description: 'Show user avatar',
        aliases: ["av", "a", "A"],
    async execute(message, args) {
    
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
    const embed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setColor("#FF0000")
        .setTitle(``)
        .setDescription(`Avatar Urls: \n\n**[png](${member.user.displayAvatarURL({format: "png", size: 1024})}) | [jpg](${member.user.displayAvatarURL({format: "jpg", size: 1024})}) | [gif](${member.user.displayAvatarURL({format: "gif", size: 1024, dynamic: true})}) | [webp](${member.user.displayAvatarURL({format: "webp", size: 1024})})**`)
        .setImage(member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setFooter(`Requested By ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true, size: 1024 }))
    return message.lineReplyNoMention(embed)
    
    }
}
