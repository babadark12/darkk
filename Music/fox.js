const Discord = require("discord.js");
const fetch = require('node-fetch');
module.exports = {
        name: "fox",
        usage: ``,
        category: "fun",
        description: "Random pictures of a fox",
        args: false,
        cooldown: 9,
        permission: "",
    async execute(message, args, client) {
//code
     const response = await fetch('https://randomfox.ca/floof/');
        const { image } = await response.json();
        message.channel.send(new Discord.MessageEmbed()
            .setColor('#0d2943')
            .setDescription('https://randomfox.ca/')
            .setImage(image)
        );
    }
}
