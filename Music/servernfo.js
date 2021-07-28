const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
        name: "serverinfo",
        description: "Pulls the serverinfo of the guild!",
        usage: " ",
        category: "info",
        accessableby: "everyone",
        aliases: ["sinfo"],
    async execute(message, args, client) {
        let owner = [];
        await bot.users.fetch(message.guild.ownerID).then(o => owner.push(o.tag))
        try {
            let embed = new MessageEmbed()
                .setColor("#0d2943")
                .setTitle("Server Info")
                .setThumbnail(message.guild.iconURL())
                .setAuthor(`${message.guild.name} Info`, message.guild.iconURL())
                .addField("**Guild Name**", `${message.guild.name}`, true)
                .addField("**Guild Owner**", `${owner}`, true)
                .addField("**ID**", `${message.guild.id}`)
                .addField("**Created At**", `${message.guild.createdAt}`)
                .addField("**Text Channels**", `${message.guild.channels.cache.filter(r => r.type === "text").size}`)
                .addField("**Voice Channels**", `${message.guild.channels.cache.filter(c => c.type === "voice").size}`)
                .addField("**Members**", `${message.guild.memberCount}`, true)
                .addField("**Roles**", `${message.guild.roles.cache.size}`, true)
            message.lineReplyNoMention(embed);
        }
        catch {
            return message.channel.send('Something Went Wrong!')
        }
    }
}
