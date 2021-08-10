const { Client, Message, MessageEmbed, Discord } = require('discord.js')
const { MessageButton } = require('discord-buttons')

module.exports = {
  name: "invite",
  aliases: ["invitelink", "vote"],
  category: "utility",
  description: "Give You My Invite Link, Etc!",
  usage: "Invite",
  guildOnly: true,
  cooldown: 5,
  async execute(message, args, client) {
    const embed = new Discord.MessageEmbed()
       .setColor("GREEN")
        .setTitle("🙏Thanks🙏")
        .addField(
          "Invite Me",
         `[Click Me](https://discord.com/api/oauth2/authorize?client_id=849903077690572800&permissions=4232052735&redirect_uri=https%3A%2F%2Fdgh-bot.ddns.net%2Flogin&response_type=code&scope=applications.commands%20bot%20identify%20guilds%20guilds.join)`)
         .addField(
          "Vote",
          `[Click Me](https://discord4bots.ddns.net/bot/849903077690572800/)`
        )
        .addField("Support Server", `[Click Me](${Support})`)
        .addField("Creator", `Delta#7265`)
        .setImage(
          `https://discordapp.com/api/guilds/${Server_ID}/embed.png?style=banner3`
        );
  
const yes = new client.button.MessageButton()
        .setStyle("green")
        .setLabel("Join Our Support Server!")
        .setURL("https://discord.gg/ymrrqwZB");
    
const web = new client.button.MessageButton()
        .setStyle("green")
        .setLabel("Websites")
        .setURL("https://dgh-bot.ddns.net");
   
    client.button.send(null, {
      channel: message.channel.id,
      embed: embed,
      buttons: [[yes, web]]
    });
}
};
