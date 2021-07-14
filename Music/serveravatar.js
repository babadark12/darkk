const discord = require("discord.js")

module.exports = {
  name: "servericon",
  aliases: ["sav", "guildavatar"],
  category: "<:info:773053660380135424>info",
  description: "Get avatar of the server",
  async execute(message, args, client) {
    
    let embed = new discord.MessageEmbed()
    
      .setDescription(`[Download](${message.guild.iconURL({ dynamic: true, size: 1024 })})`)
      .setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
      .setColor("RANDOM")
      message.channel.send(embed)
    
  }
}
