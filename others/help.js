const pagination = require('discord.js-pagination');
 const Discord = require('discord.js');

module.exports = {
    name: "help",
category: "help",
    description: "The help command, what do you expect?",

       async execute(message, args, client) {
    

        //Sort your commands into categories, and make seperate embeds for each category
const main = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('Help Info')
        .setImage('https://media.discordapp.net/attachments/911389141713956874/939758666423341066/IMG_0146.jpg?width=576&height=379')
        .setDescription(` 
1: <:emoji_177:935073131691921519>\`Genaral \`
2: <:emoji_177:935073131691921519>\`Moderation \`
3: <:emoji_177:935073131691921519>\`Fun\` 
•━━━━━━ ✽ • ✽ ━━━━━━•
4: <:emoji_177:935073131691921519> \`Music\`
5: <:emoji_177:935073131691921519> \`Text\`
6: <:emoji_177:935073131691921519> \`Gif \`
•━━━━━━ ✽ • ✽ ━━━━━━•
7: <:emoji_177:935073131691921519> \`Copy Server\`
8: <:emoji_177:935073131691921519>\`Photo\`
9: <:emoji_177:935073131691921519> \`Game\`
**[  SUPPORT  ](https://discord.gg/8hhVuG58tm)** - [INVITE](..)
      `)
        .setTimestamp()
.setColor("#FF0000")
        const general = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('<:emoji_177:935073131691921519> General Info')
        .setImage('')
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
        .setTitle('<:emoji_177:935073131691921519> Moderation')
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
> \`vmuteall vunmuteall\`
> \`nick unnick antivc unantivc\`

`)
        .setTimestamp()
.setColor('#FF0000')
        const fun = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 })) 
        .setTitle('<:emoji_177:935073131691921519> Fun')
        .setImage('https://media.discordapp.net/attachments/783102255053930496/877288953294778398/image0.gif')
        .setDescription(`
> \`slap hug howgay\`
> \`meme cry kiss\`
> \`clyde captcha pat\`
> \`cuddle joke poke\`
> \`baka phcomment punch\`
> \`spank dance rate\`
> \`advice ascii \`
> \`ship dicksize \`
`)
        .setTimestamp()
.setColor('#FF0000')
        const music = new Discord.MessageEmbed()
         .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('<:emoji_177:935073131691921519> Music')
        .setImage('https://media.discordapp.net/attachments/783102255053930496/877288953294778398/image0.gif')
        .setDescription(`
> \`play loop\`
> \`lyrics np\`
> \`pause filter\`
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
        .setTitle('<:emoji_177:935073131691921519> Text')
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
        .setTitle('<:emoji_177:935073131691921519> Gifs')
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
        .setTitle('<:emoji_177:935073131691921519> Server copy')
        .setImage('https://media.discordapp.net/attachments/783102255053930496/877288953294778398/image0.gif')
        .setDescription(` 
> \`backup-create\`
> \`backup-info \`
> \`backup-load\`

      `)
        .setTimestamp()
.setColor("#FF0000")
const photo = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('<:emoji_177:935073131691921519> PHOTO')
        .setImage('https://media.discordapp.net/attachments/783102255053930496/877288953294778398/image0.gif')
        .setDescription(` 
> \`Picanimal\`
> \`Picboy \`
> \`Picgirl\`
> \`Picbaby\`
> \`Picemoji\`
      `)
        .setTimestamp()
.setColor("#FF0000")
const game = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle(':emoji_177:935073131691921519> Game')
        .setImage('https://media.discordapp.net/attachments/783102255053930496/877288953294778398/image0.gif')
        .setDescription(` 
> \`iq\`
> \`rps\`
> \`hack\`
> \`8ball\`

      `)
        .setTimestamp()
.setColor("#FF0000")
        const pages = [
                main,
                general,
                moderation,
                fun,
                music,
                text,
                gif,
                copy,
                photo,
                game
        ]

        const emojiList = ["⬅️", "➡️"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}
