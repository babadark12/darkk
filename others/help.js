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
    .setDescription(`
> __Total Commands__
> 
> [Invite ](https://discord.com/api/oauth2/authorize?client_id=864203179947458571&permissions=8&scope=bot) - [Support](https://discord.gg/MJdH4S76bv)
>  
> **Other Commands**
> \`help\`, \`ping\`, \`prefix\`, \`uptime\`
> \`avatar\`, \`status\`, \`invites\`, \`suggest\`
> \`userinfo\`, \`serverinfo\`, \`botinfo\`,
> 
> **Music Commands**
> \`filter\`, \`loop\`, \`lyrics\`, \`np\`
> \`pause\`, \`play\`, \`queue\`, \`radio\`
> \`remove\`, \`resume\`, \`search\`, \`shuffle\`
> \`skip\`, \`skipto\`, \`stop\`, \`volume\`
> 
> **Moderation Commands**
> \`lock\`, \`unlock\`, \`hide\`, \`unhide\`
> \`ban\`, \`unban\`, \`mute\`, \`unmute\`
> \`count\`, \`emojiinfo\`, \`se\`, \`bans\`
> \`embed\`, \`addrole\`, \`rmvrole\`, \`vkick\`
> \`clear\`, \`emojilist\`, \`kick\`, \`nick\`
> \`rolinfo\`, \`warn\`, \`botlist\`, \`cinvite\`
> 
> **Gif And Picture Commands**
> \`boy\`, \`girl\`, ‌\`couple\`, \`anime\`
> \`emoji\`, \`animal\`, \`picboy\`, \`picgirl\`
> \`picanimal\`, \`picemoji\`, \`picbaby\`
> 
> **Text Commands**
> \`textkurdish\`, \`textarabic\`, \`textenglish\`,
> \`textturkish\`, \`textpersian\`
> 
> \`slap\`, \`hug\`, \`howgay\`,‌ \`rate\`
`)
    

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
