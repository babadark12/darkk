const Discord = require("discord.js");
const db = require("quick.db");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "invite",
  aliases: ["invitelink"],
  category: "utility",
  description: "Give You My Invite Link, Etc!",
  usage: "Invite",
  guildOnly: false,
  cooldown: 5,
  async execute(message, args, client) {
    message.delete();
    const Invite = `https://discord.com/api/oauth2/authorize?client_id=872588477391331399&permissions=8&scope=bot`;
    const Embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("🙏Thanks🙏")
      .addField("Invite Me", `[Click Me](${Invite})`)
      .addField("Support Me", `[Click Me](https://discord.gg/A6R2CJENGn)`)
      .addField("Developer", `Delta{}#7265`)
    return message.lineReplyNoMention(Embed)
  }
};
