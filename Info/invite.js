const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'links',
  aliases: ['supportlinks'],
  description: 'send a support links!',

  async execute(message, args, client) {
    const a = new MessageEmbed()
    .setTitle('👋 Hello!')
    .setDescription('Thank you for checking my links! here is all of my support links!\nmake sure you joined our support server if you want to ask about the repository or something \:>')
    .addField('Adding Me?', '[Click Here](https://discord.com/api/oauth2/authorize?client_id=932765246114922546&permissions=8&scope=bot)')
    .addField('Support Server?', '[Click Here](https://discord.gg/AwBfECKuMX)')
    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
    .setColor('#FF0000')
    .setFooter('One bot Links');
    return message.channel.send(a)
  }
}
