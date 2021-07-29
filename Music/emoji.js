const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

//By Legendary Keker

module.exports = {
    name: "emojiinfo",
   cooldown: 7,
    aliases: ["emojiinfo", "info"],
    description: "Show Emoji Information!",
    usage: "emoji <emoji>",
async  execute(message, args) {
    

        //Start

        if (!args[0] || !args[0].startsWith("<") || !args[0].endsWith(">") || !args[0].includes(":")) return message.channel.send(`Please Give A Valid Custom Emoji!`);

        let Thinger = args[0].split(":");

        let Animated;
        if (Thinger[0] === "<a") {
          Animated = true;
        } else {
          Animated = false;
        };

        const Name = Thinger[1];
        const ID = Thinger[2].slice(0, -1);
        const Link = `https://cdn.discordapp.com/emojis/${ID}.${Animated ? "gif" : "png"}?v=1`;

        const Embed = new MessageEmbed()
        .setColor(`#116d56`)
        .setThumbnail(Link)
        .setTitle(`Emoji Information!`)
        .addField(`Name :`, Name, true)
        .addField(`ID :`, ID, true)
        .addField(`Animated :`, Animated ? "Yes" : "No", true)
        .addField(`Link :`, `[Click Me](${Link})`)

        return message.lineReplyNoMention(Embed);

        //End

    }
};
