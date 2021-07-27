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
.then((channel1) => {
          try {            
           message.guild.channels.create(`🎧｜Music`, {
                type: 'voice', //voice Channel
                bitrate: maxbitrate, //set the bitrate to the maximum possible
                userLimit: 10, //set the limit for voice users
                parent: channel1.id, //ADMINISTRATOR
                permissionOverwrites: [{
                  id: message.guild.id,
                  allow: ['VIEW_CHANNEL', "CONNECT"],
                }, ],
              })
              .then((channel2) => {
                try {
                  message.guild.channels.create(`🎵｜requests`, {
                      type: 'text', // text channel
                      rateLimitPerUser: 6, //set chat delay
                      topic: `To request a Track, simply Type the **SONG NAME** into the Channel or the **URL** and the Bot will play it! Make sure that you are in the **right** Voice Channel (🎧｜Music)!\n\nhttps://lava.milrato.eu by: Tomato#6966`,
                      parent: channel1.id,
                      permissionOverwrites: [{
                          id: message.guild.id,
                          allow: ['VIEW_CHANNEL', "SEND_MESSAGES", "ADD_REACTIONS"],
                        },
                        { //giving the Bot himself permissions
                          id: client.user.id,
                          allow: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "ADD_REACTIONS", "SEND_MESSAGES", "MANAGE_ROLES"]
                        }
                      ],
                    })
message.reply("Done setup");
  }
}
