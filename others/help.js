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
1:  <:general:1020780372893634600> \`Genaral \`
2:  <:moderation:1020780599033745420> \`Moderation \`
3:  <:funny:1020780334180216832> \`Fun\`
•━━━━━━ ✽ • ✽ ━━━━━━•
4:  <:sparkle:1001529606651785256> \`Music\`
5:  <:text:1020780786326179893> \`Text\`
6:  <:gif:1020780437842436117> \`Gif \`
•━━━━━━ ✽ • ✽ ━━━━━━•
7:  <:load:1001138778162864148> \`Copy Server\`
8:  <:photo:1020780740746686464> \`Photo\`
9:  <:star:1001543827192037507> \`Game\`
** <:links:1020780527009136700> [SUPPORT](https://discord.gg/3D55CHur7D)** - <:link:1020780477776404630> [INVITE](https://discord.com/api/oauth2/authorize?client_id=851307156690698280&permissions=8&scope=bot)`)
        .setTimestamp()
.setColor("#FF0000")
        const general = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
        .setTitle('<:general:1020780372893634600> General Info')
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
        .setTitle('<:moderation:1020780599033745420> Moderation')
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
        .setTitle('<:funny:1020780334180216832> Fun')
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
        .setTitle('<:sparkle:1001529606651785256> music')
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
        .setTitle('<:text:1020780786326179893> Text')
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
        .setTitle('<:gif:1020780437842436117> Gifs')
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
        .setTitle('<:load:1001138778162864148> Server copy')
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
        .setTitle('<:photo:1020780740746686464> PHOTO')
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
        .setTitle('<:star:1001543827192037507> Game')
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

        const emojiList = ["⬅️", "➡️"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}
