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
        if (!args[0]) return message.channel.send("**Please Enter A Role!**")
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send("**Please Enter A Valid Role!**");
 
          let roleP = target.permissions.toArray()
const embed = new MessageEmbed()
.setColor("#FF0000")
.setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
.setDescription(`Role info for: \`${role.name}\``)
.addField("Role name:", `${role.name}`, true)
.addField("Role color:", `${role.color}`, true)
.addField('Role hex color:', role.hexColor, true)
.addField("Mention:", `<@&${role.id}>`, true)
.addField('Created AT', role.createdAt.toLocaleTimeString(), true)
.addField("Role ID:", role.id, true)
.addField("Role position", role.position, true)
.addField("Role permissions", "React to see role permissions", true)
.addField('Role Hoist', role.hoist, true)
.addField("Role Mentionable", role.mentionable, true)
.addField("Role Editable", role.editable, true)
.addField("Role managed", role.managed, true)
message.channel.send(embed).then(M => {
    M.react('✅').then((m) => {
        client.on('messageReactionAdd', (reaction, user) => {
            if (reaction.message.id !== M.id) return;
              if (user.id !== message.author.id) return;
                M.edit(roleP.join('\n').toLowerCase(), {embed: null})   
        })

        client.on('messageReactionRemove', (reaction, user) => {
            if (reaction.message.id !== M.id) return;
            if (user.id !== message.author.id) return;

            M.edit(null, {embed: embed})
        })
    })

})
}
