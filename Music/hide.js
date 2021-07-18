const Discord = module.require("discord.js");

module.exports = {
   name: "hide",
   aliases: ["hs"],
   cooldown: 5,
   description: "Locks a Channel",
   async execute(message, args) {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['VIEW_CHANNEL'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("")
   .setTimestamp()
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setDescription(`
**Hided Channel: <:emoji_19:866295615028461568>**
\`Channel Name:\` <#${message.channel.id}>
\`Hided By:\` <@${message.author.id}>
`)
   .setColor("Black");
   await message.channel.send(embed);
}
}
