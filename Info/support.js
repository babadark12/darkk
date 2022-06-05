const Discord = module.require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "support",
  aliases: ["supp"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {
 
await message.lineReplyNoMention({embed: {
 color: 3447003,
 description: "https://discord.gg/tpHApgUsyu"
}});

}
}
