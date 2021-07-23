const { MessageEmbed } = require("discord.js"); 

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('#277ecd')
    .setTitle("Invite Me!")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=868194752619773962&permissions=8&scope=bot")
    .addField("Other", `\`help\`, \`ping\`, \`prefix\`, \`uptime\`, \`avatar\`, \`invites\`, \`suggest\`, \`userinfo\`, \`serverinfo\`, \`botinfo\`, \`github\``)
    .addField("Music", `\`filter\`, \`loop\`, \`lyrics\`, \`np\`, \`pause\`, \`play\`, \`queue\`, \`radio\`, \`remove\`, \`resume\`, \`search\`, \`shuffle\`, \`skip\`, \`skipto\`, \`stop\`, \`volume\``)
    .addField("Moderation", `\`lock\`, \`unlock\`, \`ban\`, \`unban\`, \`mute\`, \`unmute\`, \`count\`, \`emojiinfo\`, \`se\`, \`bans\`, \`embed\`, \`vkick\`, \`clear\`, \`emojilist\`, \`kick\`, \`warn\`, \`botlist\`, \`cinvite\`, \`channelinfo\`, \`timelock\``)
    .addField("Gif & Picture", `\`boy\`, \`girl\`, ‌\`couple\`, \`anime\`, \`emoji\`, \`animal\`, \`picboy\`, \`picgirl\`, \`picanimal\`, \`picemoji\`, \`picbaby\``)
    .addField("Text", `\`textkurdish\`, \`textarabic\`, \`textenglish\`, \`textturkish\`, \`textpersian\``)
    .addField("Fun", `\`slap\`, \`hug\`, \`howgay\`,‌ \`rate\`, \`meme\`, \`cry\`, \`kiss\``)
    .addField("Backup", `\`backup-create\`, \`backup-load\`, \`backup-info\``)
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
