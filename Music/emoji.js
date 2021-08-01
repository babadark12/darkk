const Discord = require('discord.js')
const moment = require('moment')//npm i moment
const { lineReply } = require("discord-reply");

module.exports = {
    name: "emojiinfo",
    aliases: ["emoteid"],
    usage: "emojiinfo <emoji name, without ::>",
    category: "info",
    description: "Show emojiinfo of emoji",
        async execute(message, args, client) {
        let emojiName = args.join(" ");
        let emoji = message.guild.emojis.cache.get(args[0]) || message.guild.emojis.cache.find(emoji => emoji.name === `${emojiName}`) 
        if (!args[0]) return message.lineReplyNoMention("Please provide an emoji name or id!")
        if (!emoji) return message.lineReplyNoMention("Could not find emoji... Please provide emoji name or emoji id!")
        let xd;
        if(emoji.animated) xd = "<:yes_17:871319322792976455>"
        if(!emoji.animated) xd = '<:no_18:871319342170656780>'
        let embed = new Discord.MessageEmbed()

            .addField("Name", `${emoji.name}`)
            .addField("Emoji id", `${emoji.id}`)
            .addField("Outlook", `${emoji}`)
            .addField("Created at", `${moment(emoji.createdTimestamp).format('LT')} ${moment(emoji.createdTimestamp).format('LL')} ${moment(emoji.createdTimestamp).fromNow()}`)
            .addField("Guild", message.guild.name)
            .addField("ANIMATED", xd)
            .setThumbnail(emoji.url)
            .setColor("#116d56")
            .addField("Format", `\`<:${emoji.name}:${emoji.id}>\``)
            .addField("URL", `[click here](${emoji.url})`)

        message.lineReplyNoMention(embed)
    }
}
