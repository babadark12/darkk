const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "meme",
  aliases: ["mm"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {
   
    let replies = [
      "https://media.discordapp.net/attachments/778349612146360381/805361657781944340/FB_IMG_1608729181806.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361657177702420/IMG_20201125_181212.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361656954748948/received_310923683551106.jpeg",
      "https://media.discordapp.net/attachments/778349612146360381/805361656698765342/Komede.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361172776747038/1f16fa85f750c462.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361042229690398/image0.jpg",
      "https://media.discordapp.net/attachments/791219055083651092/805361152481689610/image0.jpg",
      "https://media.tenor.co/videos/2f17757958ab63c82e105cb2f068ba25/mp4",
      "https://media.discordapp.net/attachments/793750057500278805/805371117404815360/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805370861393149962/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805370485155954728/image0.jpg",
      "https://media.discordapp.net/attachments/791219055083651092/805363347390201866/image0.jpg",
      "https://media.discordapp.net/attachments/791219055083651092/805363470182383646/image0.jpg",
      "https://media.discordapp.net/attachments/791219055083651092/805363578055163934/image0.jpg",
      "https://media.discordapp.net/attachments/788957374311956480/792776202984095744/133411745_960371687826475_946663856063250772_n.png",
      "https://media.discordapp.net/attachments/768041476004904971/781669774374469642/124907941_1816050908534119_3407893796902602469_n.jpg",
      "https://media.discordapp.net/attachments/768041476004904971/777584124663037982/Will_You_Shut_Up_Man_.jpg",
      "https://media.discordapp.net/attachments/768041476004904971/777176870130155540/Screenshot_2020-11-14-18-17-30.png",
      "https://media.discordapp.net/attachments/791219055083651092/805364265540124683/image0.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361657387024414/Screenshot_20210122_160111.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805781587316441108/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805781864220196885/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805782023562199060/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/806561503980421120/image0.jpg"
    ];
    
    let result = Math.floor((Math.random() * replies.length));
    
    let gifembed = new Discord.MessageEmbed()

    .setTitle("Meme😂")
    .setColor("#0d2943")
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);

    message.channel.send(gifembed);

   
  }
};
