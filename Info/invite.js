const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'links',
  aliases: ['supportlinks'],
  description: 'send a support links!',

  async execute(message, args, client) {
    const a = new MessageEmbed()
    .setTitle('👋 Hello!')
    .setDescription('Thank you for checking my links! here is all of my support links!\nmake sure you joined our support server if you want to ask about the repository or something \:>')
    .addField('Adding Me?', '[Click Here](..)')
    .addField('Support Server?', '[Click Here](https://discord.gg/8hhVuG58tm)')
    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
    .setColor('#FF0000')
    .setFooter('One bot Links');
    return message.channel.send(a)
  }
}
