const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'addrole',
    aliases: ['giverole'],
    description: 'Add role to any user',
    useage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    async execute(message, args, client) {
        if (!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send(
            new MessageEmbed()
            .setColor("#FF0000")
            .setAuthor(message.author.tag)
            .setDescription("**You Dont Have The Permissions To Add Roles To Users! - [MANAGE_ROLES]**")
            .setFooter("Error!")
        );
        if (!message.guild.me.permissions.has("MANAGE_ROLES")) return  message.channel.send(
            new MessageEmbed()
            .setColor("#FF0000")
            .setAuthor(message.author.tag)
            .setDescription(" **I Dont Have The Permissions To Add Roles To Users! - [MANAGE_ROLES]**> ")
           
        )

        if (!args[0]) return message.channel.send(
            new MessageEmbed()
            .setColor("#FF0000")
            .setAuthor(message.author.tag)
            .setDescription("**Please Enter A Role!**")
            
        )

        let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!rMember) return  message.channel.send(
            new MessageEmbed()
            .setColor("#FF0000")
            .setAuthor(message.author.tag)
            .setDescription("**Please Enter A User Name!**")
            
        )
        if (rMember.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return  message.channel.send(
            new MessageEmbed()
            .setColor("#FF0000")
            .setAuthor(message.author.tag)
            .setDescription('**Cannot Add Role To This User!**')
            
        )

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(rp => rp.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
        if (!args[1]) return  message.channel.send(
            new MessageEmbed()
            .setColor("#FF0000")
            .setAuthor(message.author.tag)
            .setDescription("**Please Enter A Role!**")
            
        )

        if (!role) return message.channel.send(
            new MessageEmbed()
            .setColor("#FF0000")
            .setAuthor(message.author.tag)
            .setDescription("**Could Not Find That Role!**")
            
        )

        if (role.managed) return  message.channel.send(
            new MessageEmbed()
            .setColor("#FF0000")
            .setAuthor(message.author.tag)
            .setDescription("**Cannot Add That Role To The User!**")
            
        )
        if (message.guild.me.roles.highest.comparePositionTo(role) <= 0) return  message.channel.send(
            new MessageEmbed()
            .setColor("#FF0000")
            .setAuthor(message.author.tag)
            .setDescription('**Role Is Currently Higher Than Me Therefore Cannot Add It To The User!**')
            
        )

        if (rMember.roles.cache.has(role.id)) return  message.channel.send(
            new MessageEmbed()
            .setColor("#FF0000")
            .setAuthor(message.author.tag)
            .setDescription('**Role Is Currently Higher Than Me Therefore Cannot Add It To The User!**')
           
        )
        message.channel.send()
        if (!rMember.roles.cache.has(role.id)) await rMember.roles.add(role.id);
        var sembed = new MessageEmbed()
            // .setColor("GREEN")
            // .setAuthor(message.guild.name, message.guild.iconURL())
            // .setDescription(`Role has been added to ${rMember.user.username}`)
            .setAuthor(rMember.user.username, rMember.user.displayAvatarURL({ dynamic: true }))
            .setThumbnail(rMember.user.displayAvatarURL({ dynamic: true }))
            .setColor("#FF0000")
            .setDescription(`${role} Role has been added to ${rMember.user.username} Enjoy Dear`)
            .setFooter(`Role added by ${message.author.username}`, message.author.displayAvatarURL({dynamic:true}))
            .setTimestamp()

        message.channel.send(sembed)
        }))

        let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;

        const embed = new MessageEmbed()
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .setColor("RED")
            .setThumbnail(rMember.user.displayAvatarURL({ dynamic: true }))
            .setFooter(message.guild.name, message.guild.iconURL())
            .addField("**Moderation**", "addrole")
            .addField("**Added Role to**", rMember.user.username)
            .addField("**Role Added**", role.name)
            .addField("**Added By**", message.author.username)
            .addField("**Date**", message.createdAt.toLocaleString())
            .setTimestamp();

        let sChannel = message.guild.channels.cache.get(channel)
        if (!sChannel) return;
        sChannel.send(embed)
    }

}
