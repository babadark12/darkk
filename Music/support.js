const { MessageEmbed } = require('discord.js')
const { MessageButton } = require('discord-buttons')
module.exports = {
  name: "sup",
  aliases: ["Sup"],
  description: "Show Gif",
  usage: "Gif",
    async execute(message, args, client) {
        let btn = new MessageButton()
            .setLabel('Discord Developers');
            .setStyle('url')
            .setURL('https://discord.gg/discord-developers')
            .setID('click_me');

        await message.channel.send('Here\'s the Official Discord Developer Server Link!', btn);

    }
}
