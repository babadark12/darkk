const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
  name: "advice",
  category: "fun",
  description: "Get some advice",
  async execute(message, args, client) {
    
    let data = await random.getAdvice()
    message.channel.send(data)
    
  }
}
