const discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const { lineReply } = require("discord-reply");


module.exports = {
        name: 'roleinfo',
        description: "shows stats of the mentioned role",
        usage: "roleinfo <role mention/role id>",
        aliases: ['rinfo', 'rolei'],
        args: true,
        category: "misc",
    async execute(message, args, client) {
      const bot = client
        if (!args[0]) return message.lineReplyNoMention("**Please Enter A Role!**")
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.lineReplyNoMention("**Please Enter A Valid Role!**");

        const status = {
            false: "No",
            true: "Yes"
        }

        let roleembed = new MessageEmbed()
            .setColor("#FF0000")
            .setTitle(`Role Info: \`[  ${role.name}  ]\``)
            .setThumbnail(message.guild.iconURL())
            .addField("**ID**", `\`${role.id}\``, true)
            .addField("**Name**", role.name, true)
            .addField("**Hex**", role.hexColor, true)
            .addField("**Color**", role.color, true)
            .addField("**Members**", role.members.size, true)
            .addField("**Position**", role.position, true)
            .addField("**Mentionable**", status[role.mentionable], true)
            .setFooter(message.member.displayName, message.author.displayAvatarURL(), true)
            .setTimestamp()

        message.lineReplyNoMention(roleembed).catch(console.error);
    }
}
