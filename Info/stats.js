const Discord = require("discord.js");
const ms = require("parse-ms");
const db = require("quick.db");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "about",
  aliases: ["stats", "botstats", "botinfo"],
  description: "Show Status Of bot",
  usage: "Gif",
  async execute(message, args, client) {
    

     var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = "+";
    }

    let uptime = [];

    Object.entries(ms(client.uptime)).map((x, y) => {
      if (x[1] > 0 && y < 4) uptime.push(`**${x[1]} ${x[0]}**`);
    });

    const embed = new Discord.MessageEmbed()
      .setColor(`#116d56`)
      .setTitle(`${client.user.username} stats`)
      .setThumbnail(client.user.displayAvatarURL())
      .addField(
        `🗂️ Memory Usage:`,
        (process.memoryUsage().rss / 1024 / 1024).toFixed(2) + "MB",
        false
      )
      .setImage(`https://voidbots.net/api/embed/${client.user.id}`)
      .addField(`🎟️ Servers Count:`, `${client.guilds.cache.size}`, false)
      .addField(`🎫 Users Count:`, `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, false)
      .addField(`#️⃣ Channels Count:`, `${client.channels.cache.size}`, false)
      .addField(`🔸 Shards:`, `1`, false)
      .addField(`⚙️ Made With:`, `Node.js V12`, false)
      .addField(`🛠️ Creator:`, `Delta{}#7562`, false)
      .addField(`🔻 Prefix : `, `${prefix}`, false)
      .addField(`🚥 Uptime:`, uptime.join(", "), false)
    message.lineReplyNoMention(embed);
  }
};
