const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();
const { lineReply } = require("discord-reply");

module.exports = {
  name: "cry",
  category: "fun",
  description: "Cry with gif",
  async execute(message, args, client) {
    
    let data = await random.getAnimeImgURL("cry");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("#0d2943")
    .setFooter(`Please talk with ${message.author.username} they are crying`)
    .setTimestamp()
    
    message.lineReplyNoMention(embed);
  }
};
