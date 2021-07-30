const { MessageEmbed } = require('discord.js');
const disbut = require("discord-buttons");
disbut(client);

module.exports = {
  name: "links",
  aliases: ["links"],
  description: "get links",
  usage: "Gif",
  async execute(message, args, client) {

let button1 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=868797624826863616&permissions=8&scope=bot') 
  .setLabel('Invite Bot'); 
let button = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=868797624826863616&permissions=8&scope=bot') 
  .setLabel('Support'); 
let row = new disbut.MessageActionRow()
  .addComponents(button1, button);
message.channel.send(`\`\`\`Helpfull Links\`\`\``, row);

}
};

