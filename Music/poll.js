const { MessageEmbed } = require('discord.js');

module.exports = {
        name: "poll",
        description: "polling",
        category: "info",
        usage: "[question]",
        noalias: "No Aliases",
        accessableby: "Administrator",
    async execute(message, args, client) {
    let channel = message.guild.channels.cache.find(x => x.name === "🎟│poll" || x.name === "🎟│poll-request");

    if (!channel) {
      return message.channel.send("there is no channel with name - 🎟│poll");
    }
        if (!args[0])
            return message.channel.send("**Please Enter A Query!**");

        const embed = new MessageEmbed()
            .setColor("#116d56")
            .setTitle(`Poll For ${message.guild.name} Sever`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setDescription(args.join(' '))
        channel.send(embed).then(m => {
      m.react("👍🏻");
      m.react("👎🏻");
    });

    message.channel.send("Sent Your Poll to " + `${channel}`);
    
    message.delete()
    
  }
};
