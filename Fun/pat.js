const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "pat",
  description: "Pat somebody ヾ(¯∇￣๑)",
  category: "action",
  async execute(message, args, client) {
    const data = await fetch("https://nekos.life/api/v2/img/pat").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const patted = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setFooter(message.author.username)
      .setColor("#116d56")
      .setTitle(`${message.author.username} Patted ${patted}`)
      .setDescription(`[Click here if the image failed to load.](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.lineReplyNoMention({ embed });
  },
};
