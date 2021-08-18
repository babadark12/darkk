const { Snake } = require('weky')

module.exports = {
    name: "Snake",
category: "Buttons",
    description: "Play snake game in discord",

       async execute(message, args, client) {

        const game = new Snake({
            message: message,
            embed: {
                title: 'Snake',
                color: 'RANDOM',
                gameOverTitle: "Game Over",
            },
            emojis: {
                empty: '⬛',
                snakeBody: '🐍',
                food: '🍎 ',
                //controls
                up: '⬆️',
                right: '⬅️',
                down: '⬇️',
                left: '➡️'
            }
        })
        game.start()
    }
}
