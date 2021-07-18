const Discord = module.require("discord.js");

module.exports = {
   name: "hide",
   description: "Locks a Channel",
   usage: "lock",
 category: "admin",
  bot: ['MANAGE_SERVER', 'MANAGE_CHANNELS'],
  author: 'MANAGE_SERVER'||'MANAGE_CHANNELS',
   async execute(message, args, client) {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['VIEW_CHANNEL'],
     },
    ],);
   message.channel.send(`**${message.channel} has been Hided**`)
}
}
