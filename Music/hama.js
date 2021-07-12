const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js"); //hama

module.exports = {
  name: "text",
  aliases: ["text", "test", "testHaaaMa"],
  description: "Show Member PP Size!",
  usage: "Dicksize <Mention Member>",
  run: async (client, message, args) => {                                        //by HaaaMa 
    //Start
    message.delete();
    let sizes = [
      "HaaMa",
      "HaaaMaUppp",     /// sh3rakan 
      "first HaaMa",
      "Makana ExoTan ",     ///     ean aw shtnay datawe 
      "haaaMa Uppppppppooppppp",   
      "HaaaMaBest",             /// datawe ba random Be
      "HaaaaaaaaaaaaaMa",  // lanaw aw "" dane
      "HaaaMa",
      "haaaamA",      //// SheXaaa By HaaaMaya MadZn
      "hatdUneearm BuD",    ////
      "bdzn day",
      "kUrd = dze",     ///
      "HaaaaMaaaaa",
      "HaaaMa IoppppupPppp",     /// lanaw "" sh3r sht danen
      "poli 6 ",
      "StuedEnnnt",
      "Rozhek darom",
      "mawayaka wak jaran namawe",
      "تا کاەی...!؟"
    ];

    let Member =
      message.mentions.members.first() 
      message.guild.members.cache.get(args[0]) 
      //by HaaaMa
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    let embed = new MessageEmbed()
      .setColor("RANDOM") /// HaaaMa 
      .setTitle(``)
      .setDescription(**\n${Result}**)
   // .setFooter(Requested by ${message.author.username})
  //    .setTimestamp();
    message.channel.send(embed);

    //End
  }
};
