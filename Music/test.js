

const Discord = require('discord.js');

module.exports = {
    name: "test",
    usage: "[command/alias]",
    desc: "Shows a list of cmds or info about a specific command.",
    aliases: ['halp', 'welp', 'cmds'],
        async execute(message, args, bot) {   
        //    const database = require('../../database');
       //     const prefix = database[`${message.guild.id}`]["prefix"];
       //     if(!prefix) prefix = '+';

        if(!args.length || !args || !args[0]) {
            
            const {MessageEmbed}= require('discord.js');
            const pagination = require('discord.js-pagination');
            const embed1 = new Discord.MessageEmbed()
          //  .setURL("https://discord.gg/CaCTEJkfZA")
       //     .setThumbnail("https://cdn.discordapp.com/emojis/815236313116573727.png")
            .setTitle(`SMEXY BOT HELP`)
            .setDescription(`\`\`\`
This is the navigation page
Use ◀▶ emojis to navigate
Use 🏠  to return to the home page\`\`\``)
.addField("Important Links", `・[Invite Link](https://discord.com/oauth2/authorize?client_id=799540871552434186&permissions=2147483647&scope=bot
)
・[Support Server Invite](https://discord.gg/CaCTEJkfZA)
      `)
      .setImage("https://cdn.discordapp.com/attachments/803171601868521493/831164657124507689/standard.gif")
      .setColor("RANDOM")
            .setFooter(`Found a bug? Report it with \"${prefix}contact\"`)
          
              //    .setTimestamp();
    
          /*  const embeds = new Discord.MessageEmbed()
            .setTitle('Information Per Command')
            .setImage(`https://cdn.discordapp.com/attachments/803171601868521493/803171632641998868/unknown.png`)
            .setDescription(`Run Command \`${prefix}help\` Followed By The Command If You Want To Get More Information About It !`)
            .addField(`Example:` , `\`\`\`${prefix}hel
            p ban\`\`\``); */
  let support = ["invite", "support", "contact"]
  let info = [
    "ping",
    'uptime', 
    "userinfo", 
    "serverinfo", 
    "roleinfo", 
    "channelinfo", 
    "emojinfo", 
    "botinfo", 
    "members", 
    "channels", 
    "roles", 
    "bots", 
    "members-leaderboard", 
    "badges"
    ]
  let mod = ["prefix","announcement", "nuke", "purge"]
  let giveaways = ["gcreate","gstart", "gedit", "gend", "greroll", " gdelete", "glist"]
 let fun = ["meme", "rate", " sanitize","pp","trivia","gayrate","guess-number","jumble",'fast-type']
   const embed2 = new MessageEmbed()
    .setColor("RANDOM")
    .addField("❯ Support "+`[${support.length}]`, 
    `\`${support.join("\` **|** \`")}\``)
    .addField("❯ Information "+`[${info.length}]`, `\`${info.join("\` **|** \`")}\``)
    .addField("❯ Moderation "+`[${mod.length}]`, `\`${mod.join("\` **|** \`")}\``)
    .addField("❯ Giveaways "+`[${giveaways.length}]`, `\`${giveaways.join("\` **|** \`")}\``)
    .addField("❯ Fun And Games "+`[${fun.length}]`,`\`${fun.join("\` **|** \`")}\``);
    
    let text = ["ascii", "binary", "clap", "emojify", "morse", "mock", "flip", "reverse", "repeat", "lowercase", "uppercase"]
  let emoji = [
"jumbo","add-emoji", "remove-emoji", "add-these" , "remove-these", "rename-emoji", "emoji-stats", "emojis", "emojis-list"
    ]
    let messages = ["messages", "messages-leaderboard", "reset-messages"]
  let util = ["say", "embed", "afk", "poll", "math","bin","tts", "colour", "short-url", "covid", "docs", "google", "playstore", "urban", "wiki","spotify","instagram", "twitter", "reddit", "giphy"]
  // snipe
  let music = ["play", "skip", "skipto", "stop", "nowplaying", "loop", "shuffle", "queue", "remove", "pause", "resume", "search", "volume", "playlist", "lyrics", "leave", "join"]
 
  const embed3 = new MessageEmbed()
    .setColor("RANDOM")
    .addField("❯ Text",`\`${text.join("\` **|** \`")}\``)
    .addField("❯ Emote", `\`${emoji.join("\` **|** \`")}\``)
  //  .addField("❯ Tickets", `This category is under maintaince. `)
    .addField("❯ Utility", `\`${util.join("\` **|** \`")}\``)
    .addField("❯ Music", `\`${music.join("\` **|** \`")}\``)
    
    let cc = ["cc-create", "cc-delete", "cc-list"]
    let wc = ["add-worldchat-channel", "remove-worldchat-channel"]
   let sug = ["suggest","suggestions-channel", "accept", "deny", "cleardata"]
  let ar = ["autoroles","autorole-add", "autorole-remove", " autorole-list"]
  let wel = ["joinchannel", "joinmessage", "welcome", " leavechannel", "leavemessage", "goodbye", "clear-data"
  ]
  let stats = [
    "counters", 
    "setup", 
    "create-counter", 
    "delete-counter", 
    "list-counters", 
    "reset" ]
    
    let rr = [
     "rr-make", "rr-add", "rr-remove", "rr-list", "rr-wipe"
      ]
    const embed4 = new MessageEmbed() 
    .setColor("RANDOM")
    .addField(`❯ Reaction Roles`, `\`${rr.join("\` **|** \`") }\``)
    .addField("❯ Server Stats and Counters", `\`${stats.join("\` **|** \`")}\``)
    .addField("❯ Custom Commands", `\`${cc.join("\` **|** \`") }\``) 
    .addField("❯ World Chat", `\`${wc.join("\` **|** \`")}\``)
    .addField("❯ Suggestions", `\`${sug.join("\` **|** \`")}\``)
    .addField("❯ Autoroles", `\`${ar.join("\` **|** \`")}\``)
    .addField("❯ Welcomer and Goodbyer", `\`${wel.join("\` **|** \`")}\``)
  
  
  let owner = [
    "eval","terminal", "blacklist","status", "serverslist", "worldchat-channels-list", "restart", "shutdown", "leave-guild"
    ]
    let inv = ["invites", "invites-leaderboard"]
    let nsfw = [
 `kiss`,`4k`, `porn`,"boobs",`thigh`,"pussy", `ass`, `hentai`, `holo` ,"classic", `spank`,"bj", "anal", `lewd`, `cumsluts`, `ero`, `erofeet`, `erokimonomimi`, `erokitsune`,`eroneko`, `feet`, `femdom`
  , `futanari` , `gasm`, `kuni`,`lesbian`, `tits`, `tarp`, `yuri`
      ]
    
  const embed5 = new MessageEmbed()
  .setColor("RANDOM")
// .addField("❯ Leveling", `This category is under maintaince.`)
 .addField("❯ Messages "+`[${messages.length}]`, `\`${messages.join("\` **|** \`")}\``)
 .addField("❯ Invites "+`[${inv.length}]`, `\`${inv.join("\` **|** \`")}\``) 
 .addField("❯ NSFW "+`[${nsfw.length}]`, `\`${nsfw.join("\` **|** \`")}\``)
  .addField(`❯ Owner [${owner.length}]`, `\`${owner.join("\` **|** \`")}\``)
  
    let symbols = [`◀`, `▶` , `🏠` ];
    let page = 0;
 let pages = [
   embed1, 
   embed2, 
   embed3, 
   embed4, 
   embed5
   ]
   
   let msg = await message.lineReply(pages[page])
 
    symbols.forEach(symbol => msg.react(symbol));
    let doing = true;
    while (doing) {
    let r;
    const filter = (r, u) => symbols.includes(r.emoji.name) && u.id == message.author.id;
    try { r = await msg.awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] }) }
    catch { 
   if(page > 0) {
      msg.edit(`*SMEXY BOT HELP**`,pages[page].setFooter(`Page ${page + 1} of ${pages.length}`))
   }
      msg.reactions.removeAll()
    }
    const u = message.author;
  r = r.first();

  if(r) { if (r.emoji.name == "▶") {
msg.reactions.resolve(r.emoji.name).users.remove(u.id).catch(err => {});
if(page === pages.length - 1) page = 0; 
      else { page++; }
    } else if (r.emoji.name == '◀') {
msg.reactions.resolve(r.emoji.name).users.remove(u.id).catch(err => {});
if(page === 0) page = pages.length - 1;
      else {  page--;   }
   
      } else if(r.emoji.name == "🏠") { 
page = 0;
msg.reactions.resolve(r.emoji.name).users.remove(u.id).catch(err => {});
       page = 0;
        } else {
       msg.reactions.removeAll();
       return;
      }
      if(page > 0) {
      msg.edit(`**SMEXY BOT HELP**`,pages[page].setFooter(`Page ${page + 1} of ${pages.length}`))
   }
   else {
await msg.edit('',pages[page]).catch(error => console.error(error));
}
}
  

           
         
           
           
        }
} else {
        const name = args[0].toLowerCase();
        const cmd = bot.commands.get(name) || bot.commands.find(c => c.aliases && c.aliases.length && Array.isArray(c.aliases) && c.aliases.includes(name));
      

        if(!cmd){
            
         return message.lineReply(`**__${args[0].toUpperCase()}__** is not a valid command!`);

         
        }

        let hembed = new Discord.MessageEmbed()
        .setTitle(`__**${cmd.name.toUpperCase()} COMMAND**__`) 
        .setDescription (`\`\`\`Description: ${cmd.desc || cmd.description || "None"}\nUsage: ${prefix}${cmd.name}${cmd.usage || ""}\nPermissions: ${cmd.userPerms && cmd.userPerms.length && Array.isArray(cmd.userPerms)? cmd.userPerms.join(", ") : "None"}\nAliases: ${cmd.aliases && cmd.aliases.length && Array.isArray(cmd.aliases) ? cmd.aliases.join(', ') : "None"}\`\`\``)
        .setFooter(`Syntax: <> = Required, [] = Optional`)
        .setColor('0x#ffffff')
        message.lineReply(hembed);
        }
    
}
}
