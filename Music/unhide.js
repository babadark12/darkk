const Discord = module.require("discord.js");

module.exports = {
   name: "unhide",
   description: "Unlocks a Channel",
    usage: "unlock",
  category: "admin",
    permissions: "MANAGE_CHANNELS",
    bot: ["MANAGE_CHANNELS"],
   async execute(message, args, client) {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        null : ['VIEW_CHANNEL'],
     },
    ],);
   message.channel.send(`**${message.channel}  has been Unhided**`)
}
}
