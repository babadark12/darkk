const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
category: "help",
    description: "The help command, what do you expect?",

       async execute(message, args, client) {
    

        //Sort your commands into categories, and make seperate embeds for each category

        const general = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('ℹ General Info')
        .setDescription(`\`help, ping, prefix, uptime, links, avatar, invites, suggest, userinfo, serverinfo, , serverstats, github, support, botinfo, weather, embed, allbots, se, emojiinfo, roles\``)
        .setTimestamp()
.setColor("#FF0000")
        const moderation = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle(':tools: Moderation')
        .setDescription(`\`lock, unlock, ban, unban, bans, vkick, purge, emojilist, kick, warn, cinvite, channelinfo, channels, roleinfo, lockdown, tempban, tempmute, serverlock, serverunlock, addrole, rmvrole, mute, unmute, antivc, unantivc, vmuteall, vunmuteall, nick, unnick\``)
        .setTimestamp()
.setColor('#FF0000')
        const fun = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 })) 
        .setTitle(':joy: Funny')
        .setDescription(`\`slap, hug, howgay, meme, cry, kiss, clyde, captcha, phcomment, cuddle, joke, poke, baka, pat, punch, spank, dance, rate, advice, ascii, dicksize\``)
        .setTimestamp()
.setColor('#FF0000')
        const music = new Discord.MessageEmbed()
         .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle(':musical_note: Music')
        .setDescription(`\`filter, loop, lyrics, np, pause, play, queue, radio, remove, resume, search, shuffle, skip, skipto, stop, volume\``)
        .setTimestamp()
.setColor('#FF0000')
        const text = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle(':pen_fountain: Text')
        .setDescription(`\`textkurdish, textarabic, textenglish, textturkish, textpersian\``)
        .setTimestamp()
.setColor('#FF0000')
        const gif = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle(':star_struck: Gifs')
        .setDescription(`\`boy, girl, couple, anime, emoji, animal\``)
        .setTimestamp()
.setColor('#FF0000')
        const pages = [
                general,
                moderation,
                fun,
                music,
                text,
                gif
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}
