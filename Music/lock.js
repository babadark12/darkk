const Discord = module.require("discord.js");

module.exports = {
   name: "lock",
   aliases: ["l"],
   cooldown: 5,
   description: "Locks a Channel",
   async execute(message, args) {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("**Done :lock:**")
   .setTimestamp()
   .setThumbnail(message.author.avatarURL({dynamic: "true"}))
   .addField("Guild name", message.guild.name)
   .addField("Locked", `${message.channel.name}`)
   .addField("Moderation", `<@${message.author.id}>`, true)
   .setColor("Red")
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   await message.channel.send(embed);
}
}
