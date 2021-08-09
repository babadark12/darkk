const Discord = require('discord.js');
const config = require('./config.json');
const disbut = require('discord-buttons') 
             
module.exports = {
  name: "testl",
  aliases: ["tl"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {
   
let id1 = utils.randomID(6)
 if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send('You don\'t have permission (MANAGE_CHANNELS) to use this command').then(m => m.delete({timeout: 5000}));
    if (!message.guild.me.hasPermission(['MANAGE_CHANNELS'])) return message.channel.send('I don\'t have permission to use that command').then(m => m.delete({timeout: 5000}))
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Warning")
   .setDescription(`:lock: | ${message.channel} has been locked`)
   .setColor("RANDOM");
   let btn = new disbut.MessageButton()
   .setStyle('red')
   .setLabel('🔓')
   .setID(id1);
   let msg = await message.channel.send({embed: embed, component:btn});
   client.on('clickButton', async (button) => {
     if (button.id === id1) {
      await button.reply.defer();
      if (!button.clicker.member.permissions.has("MANAGE_CHANNELS")) return;
            button.channel.send(new Discord.MessageEmbed()
            .setTitle("Warning")
            .setDescription(`:unlock: | ${button.channel} has been unlocked`)
            .setColor("RANDOM"))
            button.channel.overwritePermissions([
              {
                 id: button.guild.id,
                 allow : ['SEND_MESSAGES'],
              },
             ],)
             btn = new disbut.MessageButton()
   .setStyle('red')
   .setLabel('🔓')
   .setID(id1)
   .setDisabled(true)
             msg.edit({embed: embed, component:btn})
    }
});
   message.delete();
  };
                
