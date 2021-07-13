const { RichEmbed } = require("discord.js");

module.exports = {
  name: "list",
  category: "<:info:773053660380135424>info",
  description: "INVITE BOT",
  async execute(message, args, client) {
  
    try {
        let notAnimated = [];
        let animated = [];
        message.guild.emojis.cache.forEach(async emoji => {
          if (emoji.animated) animated.push(emoji.toString());
          else notAnimated.push(emoji.toString());
        });
        if (!animated[0]) animated = ['None'];
        if (!notAnimated[0]) notAnimated = ['None'];
        message.channel.send('**__ANIMATED  :__**\n' + animated.join(' ') + '\n**__NORMAL:__**\n' + notAnimated.join(' '), {split:true});
      } catch (err) {
        message.channel.send('Their was an error!\n' + err).catch();
      }
      
}
};
