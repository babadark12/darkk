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
        .setImage('https://media.discordapp.net/attachments/857714045251878972/1012265103070081064/LACIVERT.gif')
        .setDescription(` 
1:  \`Genaral \`
2:  \`Moderation \`
3:  \`Fun\` 
•━━━━━━ ✽ • ✽ ━━━━━━•
4:  \`Music\`
5:  \`Text\`
6:  \`Gif \`
•━━━━━━ ✽ • ✽ ━━━━━━•
7:  \`Copy Server\`
8:  \`Photo\`
9: <a:emoji_52:1017881674484297778> \`Game\` <a:emoji_52:1017881674484297778>
**[  SUPPORT  ](https://discord.gg/3D55CHur7D)** - [INVITE](https://discord.com/api/oauth2/authorize?client_id=851307156690698280&permissions=8&scope=bot)
      `)
        .setTimestamp()
.setColor("#FF0000")
        const general = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('General Info')
        .setImage('https://media.discordapp.net/attachments/857714045251878972/1014961252906315786/8e67589060b489d9f4bb3e6a65824bff.gif')
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
        .setTitle('Moderation')
        .setImage('https://media.discordapp.net/attachments/857714045251878972/1014961252067442708/270b644788fc098dc9ddfb4fcf3cdd21.gif')
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
        .setTitle('Fun')
        .setImage('https://media.discordapp.net/attachments/857714045251878972/1014956210430165012/844cfdd6d662778e04e4b172901f342e.gif')
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
        .setTitle('')
        .setImage('https://media.discordapp.net/attachments/857714045251878972/1014956210665050152/ad30e879132a7f7be5dc3a25d8de73cc.gif')
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
        .setTitle('Text')
        .setImage('https://media.discordapp.net/attachments/857714045251878972/1009609468184633446/a_43bc7abc0b96813f041d8aac2ee9d9b8.gif')
        .setDescription(`
> \`textkurdish textarabic\`
> \`textenglish textturkish\`
> \`textpersian\`
`)
        .setTimestamp()
.setColor('#FF0000')
        const gif = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('Gifs')
        .setImage('https://media.discordapp.net/attachments/857714045251878972/1012608301994885161/Fragments.gif')
        .setDescription(`
> \`boy girl\`
> \`couple anime\`
> \`emoji animal neon\`

`)

        .setTimestamp()
.setColor('#FF0000')
const copy = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('Server copy')
        .setImage('https://media.discordapp.net/attachments/857714045251878972/1010414909017825370/GIF-220812_230230.gif')
        .setDescription(` 
> \`backup-create\`
> \`backup-info \`
> \`backup-load\`

      `)
        .setTimestamp()
.setColor("#FF0000")
const photo = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('PHOTO')
        .setImage('https://media.discordapp.net/attachments/857714045251878972/1010881755059847230/a820aa643d4f736c19bace70af8bcfb8.png')
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
        .setTitle('Game')
        .setImage('https://media.discordapp.net/attachments/857714045251878972/1007586484129366106/c159e3097719839d058c71fee4b6498f.jpg')
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

        const emojiList = ["<:leaves:866356598356049930>", "<:joines:866356465299488809>"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}
