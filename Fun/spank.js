const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "spank",
  description: "Spank someone Σ(っﾟДﾟ；)っ",
  category: "action",
  usage:"spank @user",
 async execute(message, args, client) {
    const data = await fetch("https://nekos.life/api/v2/img/spank").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const spanked = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setTitle(`${message.author.username} Spanked ${spanked}`)
      .setFooter(message.author.username)
      .setColor("#116d56")
      .setDescription(`[Click here if the image failed to load.](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.lineReplyNoMention(embed);
  },
};
