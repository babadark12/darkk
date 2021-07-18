const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'bans',
    category: "Moderation Commands",
    description: "List all Server Bans",
    usage: "bans",
async execute(message, args) {
    

        message.guild.fetchBans().then(bans => {
            let bansembed = new MessageEmbed()
                .setTitle(`Total Bans`)
                .setColor("#277ecd")
                .setDescription(`**Banned User**: ${bans.size}`)
                .setFooter("")
                .setTimestamp()
            message.channel.send(bansembed)

        })
    }
}
