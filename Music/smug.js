const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "mantiten",
  description: "Smug",
  category: "maintenance",
  async execute(message, args, client) {
    const data = await fetch("https://nekos.life/api/v2/img/smug").then(res =>
      res.json()
    );

    const embed = new MessageEmbed()
      .setColor("#0d2943")
      .setDescription(`[Click here if the image failed to load.](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.channel.send(embed);
  }
};
