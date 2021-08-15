const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "roles",
    aliases: ["serverroles"],
    description: "Show all Roles of Guild",
    usage: "roles",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
     async execute(message, args, client) {
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).slice(0, -1)

        let rolesdisplay;
        if (roles.length < 150) {
            rolesdisplay = roles.join(" ")
        } else {
            rolesdisplay = roles.slice(150).join(" ")
        }

        let roless = new MessageEmbed()
        .setColor(config.colors.yes)
        .setTitle(`**❯ All Roles Of :** ${message.guild.name}`)
        .setDescription(`**${roles.toString()}**`)
        .setThumbnail(message.guild.iconURL())
        .setImage('')
        .setFooter("Roles Of Server");

        message.channel.send(roless)
    }
}
