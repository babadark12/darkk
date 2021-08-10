const Discord = require('discord.js');
const config = require("../config.js");
const fetch = require("node-fetch");
module.exports = (client, guild, message) => {



    let channel = client.channels.cache.get("871470339132125314");
  
    const embed = new Discord.MessageEmbed()
    .setTitle(`Adding To Server`)
    .setColor(`YELLOW`)
    .setDescription(`Name: ${guild.name}\n\n The ID: ${guild.id}\n\nTotal Users: ${guild.memberCount}\n\nOwner: ${guild.owner}`)
    .setThumbnail(guild.iconURL());
     if (channel) channel.send(embed);
    
  } 
