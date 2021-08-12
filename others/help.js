const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setColor('#116d56')
    .addField("General Info", `help, ping, prefix, uptime, avatar, invites, suggest, userinfo, serverinfo, , serverstats, github, support, botinfo, weather, embed, allbots, se, emojiinfo`)
    .addField("Moderation", `lock, unlock, ban, unban, bans, vkick, purge, emojilist, kick, warn, cinvite, channelinfo, channels, roleinfo, lockdown, tempban, tempmute, serverlock, serverunlock, addrole, rmvrole`)
    .addField("Funny", `slap, hug, howgay,‌ meme, cry, kiss, clyde, captcha, phcomment, cuddle, joke, poke, baka, pat, punch, spank, dance, rate, advice, ascii, dicksize`)
    .addField("Music", `filter, loop, lyrics, np, pause, play, queue, radio, remove, resume, search, shuffle, skip, skipto, stop, volume`)
    .addField("Text", `textkurdish, textarabic, textenglish, textturkish, textpersian`)
    .addField("Game", `rps, slots, iq, hack, 8ball`)
    .addField("Backup", `backup-create, backup-load, backup-info`)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(`Need Help? This is part of commads!`, helpEmbed).catch(console.error);
  }
};
