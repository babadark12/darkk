const Discord = module.require("discord.js");

module.exports = {
  name: "support",
  aliases: ["supp"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {
 
await message.channel.send({embed: {
 color: 3447003,
 description: "https://discord.gg/yPhDhhMBK6"
}});

}
}
