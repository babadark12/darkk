const Discord = require("discord.js");
const { lineReply } = require("discord-reply"); 

module.exports = {
  name: "ctopic",
  description: "Update the channel topic",
  category: "admin",
  botPermissions: ["MANAGE_CHANNELS"],
  memberPermissions: ["MANAGE_CHANNELS"],
  async execute(message, args, client) {
    let channel = message.mentions.channels.first();
    let topic;
    if (!channel) {
      channel = message.channel;
      topic = args.join(" ");
    } else {
      topic = args.slice(1).join(" ").trim();
    }

    if (!topic) return message.lineReplyNoMention("Please provide a new topic");

    await channel.setTopic(topic);
    await message.lineReplyNoMention(
      `Successfully updated channel topic to ${topic}`
    );
  },
};
