
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'test',
  aliases: [],
  group: 'utility',
  desciption: 'Display the larger version of the supplied emoji',
  parameters: [ 'emoji' ],
  examples: [
    'emoji :exampleonly:'
  ],
  get examples(){ return [ this.name + ' <emoji>'];},
  async execute(message, args, client) {

    if (!emoji.match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/)){
      return message.channel.send(`\\❌ | ${message.author}, please enter a valid custom emoji!`);
    };

    return message.channel.send(
      new MessageEmbed()
      .setColor('GREY')
      .setImage('https://cdn.discordapp.com/emojis/' + emoji.match(/\d{17,19}/)[0])
      .setFooter(`Emoji: ${emoji.match(/\w{2,32}/)[0]} | \©️${new Date().getFullYear()} Mai`)
    );
  }
};
