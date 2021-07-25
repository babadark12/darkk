const {Message, MessageEmbed}= require('discord.js')
const ms = require('ms')

module.exports = {
  name: "tempmute",
  aliases: ["tm"],
  description: "Tempmute A Member!",
  usage: "Tempmute <Mention Member> <Mention time>",
  async execute(message, args, client) {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]
        if(!Member) return message.channel.send('**Member is not found..**')
        if(!time) return message.channel.send('**Please specify a time..**')
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send('**Muted role is not found, attempting to create muted role..**')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('**Muted role has sucessfully been created..**')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(member.roles.cache.has(role2.id)) return message.channel.send(`**${member.displayName} has already been muted..**`)
        await member.roles.add(role2)
        message.channel.send(`**${member.displayName} is now muted..**`)

        setTimeout(async () => {
            await member.roles.remove(role2)
            message.channel.send(`**${member.displayName} is now unmuted**`)
        }, ms(time))
    }
}
