const discord = require("discord.js");

module.exports = {
	name: 'pin',
	category: 'admin',
	description: 'Pin a specific messaged to the channel.',
	usage: 'pin <message_id>',
	async execute(message, args, client) {
		if(!message.member.hasPermission('MANAGE_MESSAGES')) {
			return message.channel.send(
				':x: Insufficient Permission! `MANAGE_MESSAGES` required.',
			);
		}

		if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
			return message.channel.send(
				':x: Insufficient Permission! `MANAGE_MESSAGES` required.',
			);
		}

		const msg = args[0];
		if(!msg || isNaN(msg)) {
			return message.channel.send(
				':x: Please provide a valid message.',
			);
		}
		try {
			message.channel.messages.fetch(msg)
				.then(pinned => {
					if(!pinned.pinned) {
						pinned.pin(msg);
						message.channel.send(
							`:white_check_mark: Successfully pinned ${msg}`,
						).then(message.delete());
					}
					else {
						return message.channel.send(
							':x: That message is not pinned.',
						);
					}
				});
		}
		catch (e) {
			return message.channel.send(
				':x: An error occured, please try again!',
			);
		}
	},
};
