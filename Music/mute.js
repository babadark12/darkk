const db = require('quick.db')

module.exports = {
    name: 'mute',
    description: "Mute a user.",

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
        "**You are required to mention a user you wish to mute.**"
      );
    }
 
    if(user.id === message.author.id) {
      return message.channel.send("**You cannot mute yourself.**");
    }

    let reason = args.slice(1).join(" ")
    
    
    if(!reason) reason = 'Unspecified';

    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      return message.channel.send("**The guild does not have a mute role. Please create one within Server Settings.**")
    }

    if(user.roles.cache.has(muterole)) {
        return message.channel.send("The specified user is already muted.")
      }
    
      user.roles.add(muterole)
    
      await message.channel.send(`✅ **${message.mentions.users.first().username} muted from the text! 🤐**`)
          
          user.send(``)

    }
}
