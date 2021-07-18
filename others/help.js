const { MessageEmbed } = require("discord.js"); 

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('RANDOM')
    .addField("Other", `\`help\`, \`ping\`, \`prefix\`, \`uptime\`, \`avatar\`, \`status\`, \`invites\`, \`suggest\`, \`userinfo\`, \`serverinfo\`, \`botinfo\``)
    .addField("Music", `\`filter\`, \`loop\`, \`lyrics\`, \`np\`, \`pause\`, \`play\`, \`queue\`, \`radio\`, \`remove\`, \`resume\`, \`search\`, \`shuffle\`, \`skip\`, \`skipto\`, \`stop\`, \`volume\``)
    .addField("Moderation", `\`lock\`, \`unlock\`, \`hide\`, \`unhide\`, \`ban\`, \`unban\`, \`mute\`, \`unmute\`, \`count\`, \`emojiinfo\`, \`se\`, \`bans\`, \`embed\`, \`addrole\`, \`rmvrole\`, \`vkick\`, \`clear\`, \`emojilist\`, \`kick\`, \`nick\`, \`rolinfo\`, \`warn\`, \`botlist\`, \`cinvite\``)
    .addField("Gif & Picture", `\`boy\`, \`girl\`, ‌\`couple\`, \`anime\`, \`emoji\`, \`animal\`, \`picboy\`, \`picgirl\`, \`picanimal\`, \`picemoji\`, \`picbaby\``)
    .addField("Text", `\`textkurdish\`, \`textarabic\`, \`textenglish\`, \`textturkish\`, \`textpersian\``)
    .addField("Fun", `\`slap\`, \`hug\`, \`howgay\`,‌ \`rate\`, \`meme\`, \`cry\`, \`kiss\``)
    .addField("Backup", `\`backup-create\`, \`backup-load\`, \`backup-info\``)
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
