const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'links',
  aliases: ['supportlinks'],
  description: 'send a support links!',

  async execute(message, args, client) {
    const a = new MessageEmbed()
    .setTitle('👋 Hello!')
    .setDescription('Thank you for checking my links! here is all of my support links!\n\nnmake sure you joined our support server if you want to ask about the repository or something \:>')
    .addField('Adding Me?', '[Click Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)')
    .addField('Support Server?', '[Click Here](https://discord.gg/DZtSGmkf)')
    .addField("Dm Owner For Quoesstion", 'MrRobot#7265')
    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
    .setColor('#FF0000')
    .setFooter('Pretty Links');
    return message.channel.send(a)
  }
}
