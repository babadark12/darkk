const { MessageEmbed } = require('discord.js');
const { lineReply } = require("discord-reply");

module.exports = {
    name: 'allbots',
    description: 'show all bots in guild',
    usage: 'allbots',
    category: 'info',
    async execute(message, args, client) {
    
    let checked = '🔋';
    let unchecked = '❌';


    const allbots = message.guild.members.cache.filter(m => m.user.bot).map((m) => m).map((m) => `${m.user.flags ? checked : unchecked} ${m.user.tag} (${m.id})`).join('\n');

    const embed = new MessageEmbed()
    .setColor('#116d56')
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(allbots)
    .setFooter(client.user.tag, client.user.displayAvatarURL())
    .setTimestamp();
    message.lineReplyNoMention(embed);
  }
};
