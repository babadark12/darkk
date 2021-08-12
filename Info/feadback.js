const { Client, Message, MessageEmbed } = require("discord.js");
module.exports = {
  name: 'feedback',
  async execute(message, args, client) {
    const owner = client.users.cache.get('690934381597949955');
    const owner2 = client.users.cache.get("749659830809002014")

    const query = args.join(" ");
    if(!query) return message.reply('Please tell me the feedback')

    const reportEmbed = new MessageEmbed()
    .setTitle(`New Feedback!`)
    .addField('Author', message.author.toString(), true)
    .addField('Guild', message.guild.name, true)
    .addField('Feedback Messages', query)
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setColor('YELLOW')
    .setTimestamp();

    owner.send(reportEmbed)
    owner2.send(reportEmbed)
    message.channel.send(
      new MessageEmbed()
      .setDescription(`✅ - Thanks For the feedback!`)
      .setColor('YELLOW')
    )
  }
}
