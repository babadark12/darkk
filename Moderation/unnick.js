const { Client, Message, MessageEmbed } = require("discord.js");


module.exports = {
    name: "unnick",
    aliases: [""],
    description: "use for reset nick name of a user",
    usage: "resetnick <user>",
    /**
  * @param {Client} client
  * @param {Message} message
  * @param {String[]} args
  */
    async execute(message, args, client) {
        const user = message.mentions.members.first();

        if (!user) return message.reply("Please specify a member!");

        try {
            user.setNickname(null)
            message.reply(
                new MessageEmbed()
                    .setTitle('Nickname Reseted !!')
                    .setDescription(`✅ <@${user.id}> (\`${user.user.tag}\`) nickname has been successfully Reseted !!`)
                    .addField('Changed By', `<@${message.member.id}>\n(\`${message.member.user.tag}\`)`, true)
                    .addField('Changed User', `<@${user.id}>\n(\`${user.user.tag}\`)`, true)
                    
                    .setTimestamp()
                    .setColor("#FF0000")
            )
        } catch (err) {
            message.reply(
                new MessageEmbed()
                    .setColor("#FF0000")
                    .setAuthor(message.author.tag)
                    .setThumbnail(user.user.displayAvatarURL())
                    .setDescription("I do not have permission to reset " + user.toString() + " nickname!")
                    
            );
        }

    }
}
