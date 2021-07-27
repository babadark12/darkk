const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "set-up",
  aliases: ["set-up"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {
     if (!message.member.hasPermission("MANAGE_SERVER"))
     {
      return;
    }
message.guild.channels.create('akeno | request', {
  type: 'category',
  permissionOverwrites: [
     {
       id: message.guild.roles.everyone.id,
       allow: ['VIEW_CHANNEL'],
    },
  ],
})
message.guild.channels.create('akeno-music', {
  type: 'text',
  permissionOverwrites: [
     {
       id: message.guild.roles.everyone.id,
       deny: ['VIEW_CHANNEL'],
    },
  ],
})
message.reply("Done setup");
  }
}
