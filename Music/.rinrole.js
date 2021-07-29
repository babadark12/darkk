const { RichEmbed } = require("discord.js");

module.exports = {
  name: "inrole",
  category: "ir",
  description: "show member have the rol",
  async execute(message, args, client) {
    if(!args.join(" ")) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(m => m.name.toLowerCase() === args.join(" ").toLowerCase());
    if(!gRole) return message.reply("Couldn't find that role.");
    if(gRole.members.size == 0) return xtal.simpleEmbed(message, `None Found to be in ${gRole.name}`)
    
    let i = 0;
    let kekes = '';
    gRole.members.forEach(users => {
        if (kekes.length < 1985){ kekes += `${++i}. ${users.user.tag}\n`; }
        else return false;
    });
    let embed = new RichEmbed()
    .setTitle(`Members in ${gRole.name}`)
    .setDescription(kekes)
    .setColor(colors.gold)
    .setFooter(xtal.user.username, xtal.user.avatarURL)
    .setTimestamp();
    
message.channel.send(embed);
  
};
