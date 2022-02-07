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
        .setImage('https://media.discordapp.net/attachments/911389141713956874/934707269139046480/IMG_7051.jpg?width=413&height=412')
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
        .setImage('https://media.discordapp.net/attachments/911389141713956874/934707320817082409/IMG_7061.jpg?width=412&height=412')
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
        .setImage('https://media.discordapp.net/attachments/911389141713956874/934707342484865034/IMG_7066.jpg?width=412&height=412')
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
        .setImage('https://media.discordapp.net/attachments/911389141713956874/934707352832196696/IMG_7068.jpg?width=412&height=412')
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
        .setImage('https://media.discordapp.net/attachments/911389141713956874/934707358247026728/IMG_7069.jpg?width=412&height=412')
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
        .setImage('https://media.discordapp.net/attachments/911389141713956874/934707368325951528/IMG_7071.jpg?width=412&height=412')
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
        .setImage('https://media.discordapp.net/attachments/911389141713956874/934707371769462824/IMG_7072.jpg?width=412&height=412')
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
        .setImage('https://media.discordapp.net/attachments/911389141713956874/934707338496065627/IMG_7065.jpg?width=412&height=412')
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
        .setTitle('<:emoji_177:935073131691921519> Game')
        .setImage('https://media.discordapp.net/attachments/911389141713956874/934707334746374154/IMG_7064.jpg?width=330&height=412')
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
