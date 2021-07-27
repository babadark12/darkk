const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "set-up",
  aliases: ["set-bot"],
  description: "setup",
  usage: "setup",
  async execute(message, args, client) {
     if (!message.member.hasPermission("MANAGE_SERVER"))
     {
      return;
    }
message.guild.channels.create("Akeno - Requests", {
          type: 'category',
          permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
          }, ],
        })
.then((channel1) => {
          try {
            //set the maximumbitrate limit
            let maxbitrate = 96000;
            //get the boosts amount
            let boosts = message.guild.premiumSubscriptionCount;
            //change the bitrate limit regarding too boost level from https://support.discord.com/hc/de/articles/360028038352-Server-Boosting-
            if (boosts >= 2) maxbitrate = 128000;
            if (boosts >= 15) maxbitrate = 256000;
            if (boosts >= 30) maxbitrate = 384000;

message.guild.channels.create(`🎧｜Akeno`, {
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
                    .then(async (channel3) => {
                      message.reply(`Setting up in <#${channel3.id}>`)
                      let embed1 = new MessageEmbed()
                        .setColor(ee.color)
                        .setFooter(ee.footertext, ee.footericon)
                        .setTitle("Akeno | Request | Guide")
                        .setDescription(`Enter the song name or URL to play a song\n\nYou can also type \`+command <Parameters>\``)
                        .addField(`Commands`, `help to view part of commands`)
                      let embed2 = new MessageEmbed()
                        .setColor("#0d2943")                      
                        .setTitle("Akeno | Music Queue")
                        .setDescription(`Empty\nJoin a voice channel and queue songs by name or url in here.`)
                      let embed3 = new MessageEmbed()
                        .setColor("#0d2943")                   
                        .setTitle("Akeno | Currently no song is playing!")
                        .setDescription(`Join a voice channel and enter a song name or url to play.\n[Invite Lava Music](https://lava.milrato.eu) • [Support Server](https://discord.com/invite/wvCp7q88G3)`)
                        .setImage("")
                      //send a temp message
                      channel3.send(new MessageEmbed().setColor("#0d2943").setDescription("Setting Up..")).then(msg => {
                        //react with embed 1
                        msg.edit(embed1)
                        //save it in the database
                        client.setups.set(message.guild.id, msg.id, "message_cmd_info");
                        //send another message
                        channel3.send(new MessageEmbed().setColor("#0d2943").setDescription("Setting Up..")).then(msg => {
                          //edit the message again
                          msg.edit(embed2)
                          //save it in the database
                          client.setups.set(message.guild.id, msg.id, "message_queue_info");
                          //send an message again
                          channel3.send(new MessageEmbed().setColor(ee.color).setDescription("Setting Up..")).then(async msg => {
                            //edit the message
                            msg.edit(embed3)
  }
}
