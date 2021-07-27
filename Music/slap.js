const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "slap",
  description: "Slap somebody",
  category: "image",
  async execute(message, args) {
    const data = await fetch("https://nekos.life/api/v2/img/slap").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const slapped = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setFooter(message.author.username)
      .setColor("#0d2943")
      .setTitle(`${message.author.username} Slapped ${slapped}`)
      .setDescription(`[Click here if the image failed to load.](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.lineReplyNoMention({ embed });
  },
};
