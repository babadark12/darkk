const Discord = require('discord.js');
const db = require('quick.db')
const { lineReply } = require("discord-reply");

module.exports = {
        name: 'snipe',
        description: 'Snipes last deleted message',
        aliases: null,
        usage: 'snipe',
        accessableby: "everyone",
    

    async execute(message, args, client) {

    

        const msg = client.snipes.get(message.channel.id)

        if(!msg) return message.channel.send("There is no deleted message!")

        const embed = new Discord.MessageEmbed()

        .setAuthor(msg.author, message.author.displayAvatarURL({ dynamic: true }))

        .addField('Content Of the Message :', msg.content)

        .setColor('#0d2943')

        .setFooter(" Requested by " + message.author.tag , message.author.avatarURL())

        .setTimestamp()

        if(msg.image)embed.setImage(msg.image)

        message.lineReplyNoMention(embed)

    }

}
