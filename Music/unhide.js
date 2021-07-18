const Discord = module.require("discord.js");

module.exports = {
   name: "unhide",
   aliases: ["uh"],
   cooldown: 5,
   description: "Locks a Channel",
   async execute(message, args) {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        null : ['VIEW_CHANNEL'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("")
   .setTimestamp()
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setDescription(`
**Unhided Channel: <:emoji_18:866295594279632936>**
\`Channel Name:\` <#${message.channel.id}>
\`UnHided By:\` <@${message.author.id}>
`)
   .setColor("White");
   await message.channel.send(embed);
}
}
