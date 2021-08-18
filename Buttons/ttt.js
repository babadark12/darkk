const { TicTacToe } = require('weky')
module.exports = {
    name: "ttt",
category: "Buttons",
    description: "TicTacToe game, wahoo~!",

       async execute(message, args, client) {

        if (!args[0]) return message.channel.send("Please Provide someone to battle with.")
        const opponent = message.mentions.users.first()
        const game = new TicTacToe({
            message: message,
            opponent: opponent,
            xColor: 'red',
            oColor: 'blurple',
            xEmoji: '❌',
            oEmoji: '0️⃣',
        })

        game.start()
    }
}
