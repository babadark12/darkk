const { MessageEmbed } = require("discord.js");
const prefix = ("b!");
  

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('RANDOM')
    .setTitle("Invite Me")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=864203179947458571&permissions=8&scope=bot")
    .setImage("")
    .setDescription(`
🌐 | Other Commands
\`${prefix}invite\`-\`${prefix}ping\` 
\`${prefix}prefix\`-\`${prefix}uptime\`

🎶 | Music Commands
\`${prefix}filter(fi)\`-\`${prefix}loop (l)\`-\`${prefix}lyrics (ly)\`-\`${prefix}np\`
\`${prefix}pause\`-\`${prefix}play(p)\`-\`${prefix}queue(qu)\`-\`${prefix}radio\`-\`${prefix}remove\`
\`${prefix}resume (r)\`-\`${prefix}search\`-\`${prefix}shuffle(mix)\`-\`${prefix}skip(s)\`-\`${prefix}skipto(st)\`-\`${prefix}stop\`
\`${prefix}volume(vol)\`

📢 | Moderation Commands
\`${prefix}lock\`-\`${prefix}unlock\`
\`${prefix}hide\`-\`${prefix}unhide\`
\`${prefix}ban\`-\`${prefix}unban\`
\`${prefix}mute\`-\`${prefix}unmute\`
\`${prefix}count\`-\`${prefix}invites\`
\`${prefix}emoji\`-\`${prefix}se\`
\`${prefix}bans\`-\`${prefix}embed\`
`)
    

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
