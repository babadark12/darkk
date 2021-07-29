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
    const Invite = `https://discord.com/api/oauth2/authorize?client_id=868194752619773962&permissions=8&scope=bot`;
    const Embed = new Discord.MessageEmbed()
      .setColor("#116d56")
      .setTitle("Thanks,❤")
      .addField("Invite Me", `[Click Me](${Invite})`)
      .addField("Support Server", `[Click Me](https://discord.gg/z5c3uBdU)`)
      .addField("Owner", `@MrRobot#7265 | <@690934381597949955>`)
      .setImage("");
    return message.lineReplyNoMention(Embed)
      .catch(() => message.channel.send("Invite Link - " + Invite))
      .then(m => m.delete({ timeout: 44000 }).catch(e => {}));
  }
};
