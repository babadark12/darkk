
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const lineReply = require("discord-reply")

module.exports = {
    name: "help",
category: "help",
    description: "The help command, what do you expect?",

       async execute(message, args, client) {
    

        //Sort your commands into categories, and make seperate embeds for each category

        const general = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('<a:emoji_14:830052364038832138> General Info')
        .setDescription(` 
> \`help ping prefix\`
> \`uptime links avatar \`
> \`invites suggest\`
> \`userinfo serverinfo\`
> \`serverstats github\`
> \`support botinfo\`
> \`weather embed\`
> \`allbots se\`
> \`emojiinfo roles\`
      `)
        .setTimestamp()
.setColor("#FF0000")
        const moderation = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('<a:emoji_9:815300472218976266> Moderation')
        .setDescription(`
> \`lock unlock\`
> \`ban unban bans\`
> \`vkick purge emojilist\`
> \`kick warn cinvite\`
> \`channelinfo channels roleinfo\`
> \`lockdown tempban tempmute\`
> \`serverlock serverunlock addrole\`
> \`rmvrole mute unmute antivc\`
> \`unantivc vmuteall vunmuteall\`
> \`nick unnick\`

`)
        .setTimestamp()
.setColor('#FF0000')
        const fun = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 })) 
        .setTitle('<a:emoji_26:857835095980376064> Funny')
        .setDescription(`
> \`slap hug howgay\`
> \`meme cry kiss\`
> \`clyde captcha phcomment\`
> \`cuddle joke poke\`
> \`baka pat punch\`
> \`spank dance rate\`
> \`advice ascii dicksize\`
`)
        .setTimestamp()
.setColor('#FF0000')
        const music = new Discord.MessageEmbed()
         .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('<a:janom1:866836692250132481> Music')
        .setDescription(`
> \`nfilter loop\`
> \`lyrics np\`
> \`pause play\`
> \`queue radio\`
> \`remove resume\`
> \`search shuffle\`
> \`skip skipto\`
> \`stop volume\`
`)
        .setTimestamp()
.setColor('#FF0000')
        const text = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('<a:emoji_27:857835733984739359> Text')
        .setDescription(`
> \`ntextkurdish textarabic\`
> \`textenglish textturkish\`
> \`textpersian\`
`)
        .setTimestamp()
.setColor('#FF0000')
        const gif = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('<a:emoji_13:763535848599191554> Gifs')
        .setDescription(`
> \`nboy girl\`
> \`couple anime\`
> \`emoji animal\`

`)
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

        const timeout = '12000000000000';

        pagination(message, pages, emojiList, timeout)
    }
}
