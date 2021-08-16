const Discord = require('discord.js');
 const db = require('quick.db')

 module.exports = {
         name: 'snipe',
         description: 'Snipes last deleted message',
         aliases: null,
         usage: 'snipe',
         accessableby: "everyone",


         async execute(message, args, client) {



         const message = client.snipes.get(message.channel.id)

         if(!message) return message.channel.send("There is no deleted message!")

         const embed = new Discord.MessageEmbed()

         .setAuthor(message.author, message.author.displayAvatarURL({ dynamic: true }))

         .addField('Content Of the Message :', message.content)

         .setColor('#FF0000')

         .setFooter(" Requested by " + message.author.tag , message.author.avatarURL())

         .setTimestamp()

         if(message.image)embed.setImage(message.image)

         message.channel.send(embed)

     }

 }
