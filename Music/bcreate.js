const Discord = require("discord.js");
const backup = require("discord-backup");
const { lineReply } = require("discord-reply"); 
const prefix = ("+");

module.exports = {
  name: "backup-create",
  usage: "none",
  description: "create backup",
  category: "backup",
  aliases: ["create-backup", 'create'],

  async execute(message, args, client) {

  if(!message.member.hasPermission("ADMINISTRATOR")) {
  return message.lineReplyNoMention("You must be an administrator of this server to request a backup!", message.channel);
}
if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.lineReplyNoMention("I must be an administrator of this server to create a backup!", message.channel);
    }
// Create the backup
backup.create(message.guild, {
  jsonBeautify: true
}).then((backupData) => {
  // And send informations to the backup owner
  message.author.send("The backup has been created! To load it, type this command on the server of your choice: `" + prefix + "load-backup " + backupData.id + "`");
  message.lineReplyNoMention(new Discord.MessageEmbed()
  .setDescription('Backup has been created and saved to my data. to load your backup, please go to your dms, copy the id that i given, then load it.')
  .setColor('BLUE')
  .setFooter('Backup created at')
  .setTimestamp());
}).catch((e) => {
  return message.lineReplyNoMention('Please open your dms, i cant dm you the backup code!', message.channel)
})
  }
}
