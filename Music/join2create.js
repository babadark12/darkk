const { Client, Message, MessageEmbed } = require('discord.js');
let prefix = "+";

module.exports = {
    name: 'join2createsetup',
    aliases: ['j2c', 'join2create'],
    categories: 'Music',
    description: 'Setup join2create in Guild',
    usage: '', 
    async execute(message, args, client) {   

        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(new MessageEmbed().setColor("#116d56").setFooter("❌").setTitle(":x: You don't have enough Permissions!"));

        let { channel } = message.member.voice

        if (channel) {
            message.reply(new MessageEmbed()
                .setTitle("Setup Complete for Join to Create")
                .setColor("#116d56")
                .setDescription(` Channel: \`${channel.name}\`\n Now is Join to Create Channel!`)
                .setFooter("Done")
            );
            client.settings.set(message.guild.id, channel.id, `channel`);
        } else {
            message.guild.channels.create("Join to Create", {
                type: 'voice',
                bitrate: 8000,
                userLimit: 2,
                permissionOverwrites: [ //update the permissions
                    { //the role "EVERYONE" is just able to VIEW_CHANNEL and CONNECT
                        id: message.guild.id,
                        allow: ['VIEW_CHANNEL', "CONNECT"],
                        deny: ["SPEAK"]
                    },
                ],
            }).then(vc => {
                if (message.channel.parent) vc.setParent(message.channel.parentID)
                message.reply(
                    new MessageEmbed()
                        .setTitle(" Setup Complete for Join to Create")
                        .setColor("#116d56")
                        .setDescription(` Channel: \`${channel.name}\`\n Created For You!`)
                        .setFooter("Done")
                );
                client.settings.set(message.guild.id, vc.id, `channel`);
            })

        }
    }
}
