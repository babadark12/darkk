const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "inbo",
  category: "util",
  description: "Get bot link invite",
  usage: "inbot",
     permissions: "",
  async execute(message, args, client) {
    message.delete();
    //  let annel = message.guild.channels.cache.find((x) => (x.name === ``))
    const db = require("quick.db");
    const msgg = args[0];
    //if (!chnnel, message.channel.id) return; //db.get(`inbot_${message.guild.id}`)) return;
    // message.channel.send(Check Channel ${channel})//
    if (!msgg)
      return message.channel.send(
        new MessageEmbed()
          .setTitle("Discord Developer")
          .setDescription("Please Give ID Bot")
          .setColor("RED")
          .setTimestamp()
      );
    const mss = args[1];
    if (!mss)
      return message.channel.send(
        new MessageEmbed()
          .setTitle("Discord Developer")
          .setDescription(
            "Please Give Prefix Bot"
          )
          .setColor("RED")
          .setTimestamp()
      );
    if (!msgg)
      return message.channel.send(
        new MessageEmbed()
          .setTitle("Discord Developer")
          .setDescription("Please Give ID Bot")
          .setColor("RED")
          .setTimestamp()
      );
    if (msgg.length > 18)
      return message.channel.send(
        new MessageEmbed()
          .setTitle("Discord Developer")
          .setDescription(
            "Too Long ID - 18 Limit"
          )
          .setColor("YELLOW")
          .setTimestamp()
      );
    if (msgg.length < 17)
      return message.channel.send(
        new MessageEmbed()
          .setTitle("Discord Developer")
          .setDescription(
            "Less Bot ID!, must be 18 ID"
          )
          .setColor("RED")
          .setTimestamp()
      );
    if (isNaN(msgg))
      return message.channel.send(
        new MessageEmbed()
          .setTitle("Discord Developer")
          .setDescription("This is not an ID")
          .setColor("RED")
          .setTimestamp()
      );
    //  const { MessageEmbed } = require ("discord.js")
    //await message.channel.send("Check Channel")
    const me = message.author.tag;
    //  const us = await message.guild.members.fetch(args[0])
    //   const nick = message.members.first()
    // const bot = message.bot.tag;
    //return message.channel.send("Check Channel")
    //\nBot Name: \n${us}  const { Discord, MessageEmbed } = require("discord.js");
    //await message.channel.send("Check Channel")
    const no = new MessageEmbed()
      .setTitle("BOT LINK ID")
      .setDescription(`Author: \`\`\`css\n${me}\n\`\`\``)
      .setColor("YELLOW")
      .addField("ID BOT", `\`\`\`\n${msgg}\n\`\`\``)
      .addField("PREFIX", `\`\`\`\n${mss}\n\`\`\``)
      .addField(
        "INVITE BOT",
        `[Clink Here](https://discord.com/oauth2/authorize?client_id=${msgg}&scope=bot&permissions=8)`
      );
    // await message.channel.send(
    message.channel.send(no).then(m => {
      m.react("✅");

      m.react("❌");

      client.on("messageReactionAdd", async (reaction, user) => {
        if (user.bot) return; // If the user was a bot, return.

        if (!reaction.message.guild) return; // If the user was reacting something but not in the guild/server, ignore them.

        if (reaction.emoji.name === "❌") {
   m.delete()
        }
      });
    });

    // if (reaction.message.partial) await reaction.message.fetch(); // Partial messages do not contain any content so skip them.

    //  if (reaction.partial) await reaction.fetch();

    //  await reaction.message.guild.members.cache.get(user.id).roles.add("866061440208076851") // Minecraft role.
  }
};
