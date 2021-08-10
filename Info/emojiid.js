const Discord = module.require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "emojiid",
  aliases: ["eid"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {
        const name = args.join(" ");
        const emoji = message.guild.emojis.cache.find(r => r.name === name);
        if (!name) {
        return message.lineReplyNoMention("Please type the emoji name")
        }
        if (!emoji) {
        return message.lineReplyNoMention("Couldn't find the Emojis with the provided name. Please make sure the Emoji name is correct");
        }
        message.lineReplyNoMention(`\`\`\`${emoji}\`\`\``)
}
}
