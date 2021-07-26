const { MessageEmbed } = require('discord.js')
const { MessageButton } = require('discord-buttons')
module.exports = {
    name: "support",
    async execute(message, args, client) {
        let btn = new MessageButton()
            .setLabel('Discord Developers');
            .setStyle('url')
            .setURL('https://discord.gg/discord-developers')
            .setID('click_me');

        await message.channel.send('Here\'s the Official Discord Developer Server Link!', btn);

    }
}
