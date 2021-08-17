const { WouldYouRather } = require('weky')

module.exports = {
    help: {
        name: 'wyr',
        aliases: ['wouldyourather'],
        description: 'Would you Rather? Hmm..',
        category: __dirname.split("Buttons\")[1]
    },
    run: async (client, message, args) => {

        await WouldYouRather(message);
    }
}
