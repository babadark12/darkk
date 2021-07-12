const db = require('quick.db')

module.exports = {
    name: 'unmute',
    description: "Unmute a user.",

    async execute(message, args) {
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send(
              "You do not have permission to use this command."
            );
          }
      
          if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("The bot does not have permission to mute.");
          }

          const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "You are required to mention a user you wish to unmute."
      );
    }
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
    if(user.roles.cache.has(muterole)) {
      return message.channel.send("The specified user is not muted.")
    }

    user.roles.remove(muterole)
    
    await message.channel.send(`✅ **${message.mentions.users.first().username} unmuted from the text! 🤐**`)
    
    user.send(``)


    }
}
