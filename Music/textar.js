const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "textarabic",
  aliases: ["textar", "textAr", "textAR"],
  description: "Show text",
  usage: "text",
  async execute(message, args, client) {
    
    
    let replies = ["هيه حظوظ والطيب يرد خسران من ذيچ الاحلام الچان بانيها:herb:","إذا زارتک شدّه فاعلم أنّها سحابه صیف عن قلیل تقشع، ولا یخیفک رعدها، ولا یرهبک برقها، فربّما کانت محمّلهً بالغیث","چنت اعاتب بالوكت عرفني بيك :broken_heart: :exclamation:","أخاف أفگد طعم باچر يالمتانيك:wilted_rose:","اسألني واني اختصر لعيونك المده :wilted_rose:","وأستحيت من الله حيل ، وآنه سآجد مر ذكرهم والتهيت :wilted_rose:","ما خربتني وياك غير اليكولون:wilted_rose:","شگلّك يالعلي تسأل.. انا التيهت كلشي وكلشي ما اندل:wilted_rose:","هي مسؤولية من تحبلك انسان :broken_heart: "];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let result = Math.floor((Math.random() * replies.length));

    message.lineReplyNoMention(replies[result]).then(message => {
			message.react('<a:emoji_21:867156106464067624>').then(r => {
				message.react('<a:emoji_22:867156121536692264>');
           });
          });
      }
}
