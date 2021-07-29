const ms = require("ms");
const discord = require("discord.js");

module.exports = {
  name: "time",
  usage: `time <time> <s/m/h>`,
  category: "utility",
  description: "information from time",
  args: true,
  cooldown: 2,
  permission: "",
  async execute(message, args, client) {
    //code
    let time = args.join(" ");
    //###############
    let embed = new discord.MessageEmbed()
      .addField("Timer the result", `\`${ms(time)}\``, true)
      .setColor("#116d56");
    message.channel.send(embed);
  }
};
