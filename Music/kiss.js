const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  name: "kiss",
  category: "fun",
  description: "Kiss someone",
  async execute(message, args, client) {
    
    let target = message.mentions.members.first()
    
    let data = await random.getAnimeImgURL("kiss");
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Kissed`)
    .setURL(data)
    .setImage(data)
    .setColor("#0d2943")
    .setFooter(`${message.author.username} kisses ${target.user.username}`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};
