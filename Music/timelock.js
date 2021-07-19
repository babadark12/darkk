const Discord = module.require("discord.js");
const ms = require("ms"); //Make sure to install ms package

module.exports = {
    name: "timelock",
    description: "Start a timed lockdown in a channel",
     usage: "timelock <time>",
  args: true,
category: "admin",
  author: "MANAGE_SERVER"|| "MANAGE_CHANNELS",
  bot : ["MANAGE_SERVER", "MANAGE_CHANNELS"],
  async execute(message, args, client) {
        const time = args.join(" ");
        if (!time) {
        return message.channel.send("Enter a valid time period in `Seconds`, `Minutes` or `Hours`")
        }
        if (!message.member.hasPermission("MANAGE_SERVER", "MANAGE_CHANNELS")) {
            return message.channel.send(`You don't have enough Permisions`)
        }
        message.channel.overwritePermissions([
            {
               id: message.guild.id,
               deny : ['SEND_MESSAGES'],
            },
           ],);
           message.channel.send(`**${message.channel} has been placed under lockdown for** \`${time}\``)

           setTimeout(function(){
           message.channel.overwritePermissions([
               {
               id: message.guild.id,
               null: ['SEND_MESSAGES'],
               },
            ],);
           message.channel.send(`**Locked has been lifted in ${message.channel}**`)
        }, ms(time));
        message.delete();
    }
}
