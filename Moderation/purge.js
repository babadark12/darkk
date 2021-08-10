const discord = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "purge",
  aliases:["c", "clear"],
  category: "<:mod:789590144650051604> moderation",
  description: "Delete bulk messages with 1 command",
  async execute(message, args, client) {
    
            
    if (message.deletable) {
        message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.lineReplyNoMention("Missing Permissions!").then(m => m.delete(5000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.lineReplyNoMention("This is not a number").then(m => m.delete(5000));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
    .catch(err => message.lineReplyNoMention(`Something went wrong... ${err}`));
    
  }
}
