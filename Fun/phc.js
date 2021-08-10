const Discord = require("discord.js");
const fetch = require("node-fetch");
const { lineReply } = require("discord-reply");

module.exports = {
        name: "phcomment",
        aliases: ['phc'],
        category: "image",
        description: "Shows PH Comment",
        usage: '[text]',
        accessableby: "everyone",
    async execute(message, args, client) {

        let user = await message.mentions.members.first()
        let text = args.join(" ");

        if(user){
            text = args.slice(1).join(" ");
        } else {
            user = message.author;
        }

        if(!text){
            return message.lineReplyNoMention("**Enter Text!**");
        }

        let m = await message.lineReplyNoMention("**Please Wait...**");
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=phcomment&username=${user.username}&image=${user.displayAvatarURL({ format: "png", size: 512 })}&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "phcomment.png");
            message.lineReplyNoMention(attachment);
            m.delete({ timeout: 5000 });
        } catch(e){
            m.edit("Error, Try Again! Mention Someone");
        }
    }
};
