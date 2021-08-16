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
        .setDescription(`\`help\n ping\n prefix\n uptime\n links\n avatar\n invites\n suggest\n userinfo\n serverinfo\n serverstats\n github\n support\n botinfo\n weather\n embed\n allbots\n se\n emojiinfo\n roles\``)
        .setTimestamp()
.setColor("#FF0000")
        const moderation = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle(':tools: Moderation')
        .setDescription(`\`lock\n unlock\n ban\n unban\n bans\n vkick\n purge\n emojilist\n kick\n warn\n cinvite\n channelinfo\n channels\n roleinfo\n lockdown\n tempban\n tempmute\n serverlock\n serverunlock\n addrole\n rmvrole\n mute\n unmute\n antivc\n unantivc\n vmuteall\n vunmuteall\n nick\n unnick\``)
        .setTimestamp()
.setColor('#FF0000')
        const fun = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 })) 
        .setTitle(':joy: Funny')
        .setDescription(`\`slap\n hug\n howgay\n meme\n cry\n kiss\n clyde\n captcha\n phcomment\n cuddle\n joke\n poke\n baka\n pat\n punch\n spank\n dance\n rate\n advice\n ascii\n dicksize\``)
        .setTimestamp()
.setColor('#FF0000')
        const music = new Discord.MessageEmbed()
         .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle(':musical_note: Music')
        .setDescription(`\`filter\n loop\n lyrics\n np\n pause\n play\n queue\n radio\n remove\n resume\n search\n shuffle\n skip\n skipto\n stop\n volume\``)
        .setTimestamp()
.setColor('#FF0000')
        const text = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle(':pen_fountain: Text')
        .setDescription(`\`textkurdish\n textarabic\n textenglish\n textturkish\n textpersian\``)
        .setTimestamp()
.setColor('#FF0000')
        const gif = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle(':star_struck: Gifs')
        .setDescription(`\`boy\n girl\n couple\n anime\n emoji\n animal\``)
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
