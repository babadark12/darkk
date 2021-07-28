const Discord = module.require("discord.js");

module.exports = {
  name: "greentext",
  aliases: ["gt"],
  description: "green text",
  usage: "greentext",
  async execute(message, args, client) {
    const text = args.join(" ");
    if (!text) {
    return message.channel.send("You need to enter some text")
    }
    message.channel.send(`\`\`\`css\n${text}\n\`\`\``)
}
}
