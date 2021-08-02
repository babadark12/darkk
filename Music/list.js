const { RichEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "emojilist",
  category: "Music",
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
        message.lineReplyNoMention('Animated  :\n' + animated.join(' ') + '\nNormal:\n' + notAnimated.join(' '), {split:true});
      } catch (err) {
        message.lineReplyNoMention('Their was an error!\n' + err).catch();
      }
      
}
};
