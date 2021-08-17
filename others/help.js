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
        .setTitle('<a:emoji_14:830052364038832138> General Info')
        .setImage('https://media.discordapp.net/attachments/783102255053930496/877288953294778398/image0.gif')
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
        .setImage('https://media.discordapp.net/attachments/783102255053930496/877288953294778398/image0.gif')
        .setDescription(`
> \`lock unlock addrole\`
> \`ban unban bans\`
> \`vkick purge emojilist\`
> \`kick warn cinvite\`
> \`channelinfo channels roleinfo\`
> \`lockdown tempban tempmute\`
> \`serverlock serverunlock \`
> \`rmvrole mute unmute \`
> \` vmuteall vunmuteall\`
> \`nick unnick antivc unantivc\`

`)
        .setTimestamp()
.setColor('#FF0000')
        const fun = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 })) 
        .setTitle('<a:emoji_26:857835095980376064> Funny')
        .setImage('https://media.discordapp.net/attachments/783102255053930496/877288953294778398/image0.gif')
        .setDescription(`
> \`slap hug howgay\`
> \`meme cry kiss\`
> \`clyde captcha pat\`
> \`cuddle joke poke\`
> \`baka phcomment punch\`
> \`spank dance rate\`
> \`advice ascii dicksize\`
> \` ship phcomment\`
`)
        .setTimestamp()
.setColor('#FF0000')
        const music = new Discord.MessageEmbed()
         .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('<a:janom1:866836692250132481> Music')
        .setImage('https://media.discordapp.net/attachments/783102255053930496/877288953294778398/image0.gif')
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
        .setImage('https://media.discordapp.net/attachments/783102255053930496/877288953294778398/image0.gif')
        .setDescription(`
> \`textkurdish textarabic\`
> \`textenglish textturkish\`
> \`textpersian\`
`)
        .setTimestamp()
.setColor('#FF0000')
        const gif = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('<a:emoji_13:763535848599191554> Gifs')
        .setImage('https://media.discordapp.net/attachments/783102255053930496/877288953294778398/image0.gif')
        .setDescription(`
> \`boy girl\`
> \`couple anime\`
> \`emoji animal neon\`

`)

        .setTimestamp()
.setColor('#FF0000')
const copy = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('<a:jano:877151218869370900> Server copy')
        .setImage('https://media.discordapp.net/attachments/783102255053930496/877288953294778398/image0.gif')
        .setDescription(` 
> \`backup-create\`
> \`backup-info \`
> \`backup-load\`

      `)
        .setTimestamp()
.setColor("#FF0000")
        const pages = [
                general,
                moderation,
                fun,
                music,
                text,
                gif,
                copy
        ]

        const emojiList = ["⬅️", "➡️"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}
