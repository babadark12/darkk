const Discord = require("discord.js");
const { MessageEmbed }  = require("discord.js");
const db = require("quick.db");
const moment = require("moment");

module.exports = async client => {
  client.on("guildCreate", async guild => {
    if (!guild.available) return;
    const embed = new Discord.MessageEmbed()
      .setTitle("Hello, I'm DGH BOT!")
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .addField(
        "Information",
        `You've just added me to **${guild.name}**.\n\nHere is some information about myself:\n\nMy Prefix:\`+help|mention\`\nCommands: Moderation, Settings, misc, welcome, fun, utility`,
        true
      )
      .addField(
        "My Website",
        " Sorry My Website in Glitch.com :(\n [Here](https://bot-jsll.glitch.me/)",
        true
      )
      .addField(
        "Permissions",
        "Give Permissions among others : MANAGE_WEBHOOKS,BAN_MEMBERS,KICK_MEMBERS_MANAGE_ROLES,MANAGE_NICKNAME",
        true
      )
      .setTimestamp() // moment().format('LLL'),
      .setFooter(`${client.user.tag}`);
    guild.owner.send(embed);
  });
};
