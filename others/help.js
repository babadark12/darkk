const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setColor('#0d2943')
    .setTitle("Invite Me!")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=868194752619773962&permissions=8&scope=bot")
    .addField("Other", `\`help\`, \`ping\`, \`prefix\`, \`uptime\`, \`avatar\`, \`invites\`, \`suggest\`, \`userinfo\`, \`serverinfo\`, \`botinfo\`, \`github\``)
    .addField("Music", `\`filter\`, \`loop\`, \`lyrics\`, \`np\`, \`pause\`, \`play\`, \`queue\`, \`radio\`, \`remove\`, \`resume\`, \`search\`, \`shuffle\`, \`skip\`, \`skipto\`, \`stop\`, \`volume\``)
    .addField("Moderation", `\`lock\`, \`unlock\`, \`ban\`, \`unban\`, \`count\`, \`emojiinfo\`, \`se\`, \`bans\`, \`embed\`, \`vkick\`, \`clear\`, \`emojilist\`, \`kick\`, \`warn\`, \`botlist\`, \`cinvite\`, \`channelinfo\`, \`roleinfo\`, \`timelock\`, \`tempban\``)
    .addField("Gif & Picture", `\`boy\`, \`girl\`, ‌\`couple\`, \`anime\`, \`emoji\`, \`animal\`, \`neon\`, \`picboy\`, \`picgirl\`, \`picanimal\`, \`picemoji\`, \`picbaby\``)
    .addField("Text", `\`textkurdish\`, \`textarabic\`, \`textenglish\`, \`textturkish\`, \`textpersian\``)
    .addField("Fun", `\`slap\`, \`hug\`, \`howgay\`,‌ \`rate\`, \`meme\`, \`cry\`, \`kiss\`, \`ascii\`, \`advice\``)
    .addField("Backup", `\`backup-create\`, \`backup-load\`, \`backup-info\``)
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
