const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "textturkish",
  aliases: ["TextArabic", "Textarabic", "TEXTARABIC", "ta"],
  description: "Show text",
  usage: "text",
  async execute(message, args, client) {
    
    
    let replies = ["Tüm yazdıklarım seni övmek içindir, Sen de her zamanki gibi evrenin en güzelisin ..","Bir gün birini delmemeyi öğreneceğim,Kendim bile değil ...","Güzel Şeyler Hiç Bitmesin Mesela Senin Sevgin","Bazı insanlar kalbinde kalır, ama hayatında değil","Hayat sevince guzel sevigsiz hay boş","Ay dünyaya, ben sana tutulmuşum..","Bu Dunyada Iyiliklerimize  Vergileniyoruz Kiyamette De Kötuluklerimize Bu Hayat Gerçeğidir","Bu Dunyada Iyiliklerimize  Vergileniyoruz Kiyamette De Kötuluklerimize Bu Hayat Gerçeğidir","Yaşamak Istediğim Dünya Sensin","Bir gün birini delmemeyi öğreneceğim,Kendim bile değil ...","Canım çok acıyor lan çok sesimi duyan yok...","büyüdüm anne şimdi senden habersiz ağlıyorum...","Bir fotoğrafına saatlerce bakakaldığımı bilmiyorsun","Ay dünyaya, ben sana tutulmuşum..","Bi mutlu olamadım bu hayata","Tüm yazdıklarım seni övmek içindir, Sen de her zamanki gibi evrenin en güzelisin ..","Ve sonsuza kadar mutlu oldular, ama AYRI","Güzel Şeyler Hiç Bitmesin Mesela Senin Sevgin","En çok sevdiklerimiz bile ruhumuza zehir olabilir","Bir fotoğrafına saatlerce bakakaldığımı bilmiyorsun","İnsanlar incinecek ve mutlu ol diyecekler.","Tüm yazdıklarım seni övmek içindir,Sen de her zamanki gibi evrenin en güzelisin ..","Anne, ben diyar diyar umudun savaşçısı,Bir tutam sevgi için dağladım gözlerimi.","Anne, ben diyar diyar umudun savaşçısı,Bir tutam sevgi için dağladım gözlerimi."];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let result = Math.floor((Math.random() * replies.length));

    message.channel.send(replies[result]).then(message => {
			message.react('<a:emoji_3:865956590484848640>').then(r => {
				message.react('<a:emoji_2:865956568738693172>');
           });
          });
      }
}
