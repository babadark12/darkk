const { Client, Message, MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "firstmessage",
  description: "send first message on this channel.",
  usage: "firstmessage/firm",
  category: "info",
  aliases: ["firm"],
  async execute(message, args, client) {
    const fetchMessages = await message.channel.messages.fetch({
      after: 1,
      limit: 1,
    });
    const msg = fetchMessages.first();

    message.lineReplyNoMention(
      new MessageEmbed()
        .setColor("#d7342a")
        .setTitle(`Click To See The First Message ${message.channel.name}`)
        .setURL(msg.url)
        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
        .setDescription("Content: " + msg.content)
        .addField("Author", msg.author, true)
        .addField('Message ID', msg.id, true)
        .addField('Send At', message.createdAt.toLocaleDateString(), true)
    );
  },
};
