const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
  name: "test",
  aliases: ["test12"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {

    const sayHello = new MessageButton()
      .setStyle('green') //color of button
      .setLabel('Hello') //text on the button
      .setID('hello') //the id you will use to get a click event

    const sayBye = new MessageButton()
      .setStyle('red') //color of button
      .setLabel('Bye') //text on the button
      .setID('bye') //the id you will use to get a click event

      let group1 = new MessageActionRow().addComponents([sayHello , sayBye ]);


    helloEmbed = new Discord.MessageEmbed()

    .setTitle('Say hello or bye')
    .setColor("#9B72B4")
    message.channel.send({embed: helloEmbed, components: [group1]})

    bot.on(`clickButton`, async(button) => { //button works sort of as a reaction 
      button.defer()
      if (button.clicker.user.bot) return;

      if (button.id == "hello") return button.channel.send('Hello how are you?')
      if (button.id == "bye") return button.channel.send('Bye have a great time!')

    })
