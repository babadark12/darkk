const Discord = require("discord.js");

module.exports = {
  name: "inrole",
  aliases: [],
  description: "You can see the members with the role",
  category: "Utility",
  usage: "inrole <role>",
  botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS"],
  userPermissions: [],
  cooldown: 2,
   async execute(message, args, client) {
    try {
    const role = message.mentions.roles.firts || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(e => e.name.match(new RegExp(`${args[0]}`, 'gi')));

    if (!role) return message.channel.send("> | You must mention a role!");

    let i = 0;
    const membersxd = role.members.filter((x) => x.user.tag !== message.guild.id).map((x) => `[${++i}] ${x.user.tag}`)
    const listaRoles = membersxd.length > 25 ? `${membersxd.slice(0, 25).join('\n')}\n# and ${membersxd.length - 25} more members` : membersxd.join('\n');

    function css(str) {
        return `\`\`\`css\n${str}\n\`\`\``;
      };

    const embedInRole = new Discord.MessageEmbed()
        .setTitle(`Members with the role:\n\`${role.name}\` - \`${role.members.size}\``)
        .setDescription(css(listaRoles))
        .setColor("#FF0000")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter(client.user.displayAvatarURL());
        message.channel.send(embedInRole);
      } catch (e) {
        message.channel.send(`| **${e.name}:** ${e.message}`);
      }
  }
}
