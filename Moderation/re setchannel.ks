const Discord = require('discord.js');

module.exports = {
  name: 'resetchannel',
  aliases: [ 'resetch' ],
  guildOnly: true,
  permissions: [ 'MANAGE_CHANNELS' ],
  clientPermissions: [ 'MANAGE_CHANNELS' ],
  group: 'Moderation',
  description: `Removes all permission overwrites and resets @everyone permissions to \`unset\``,
  examples: [
    'resetchannel',
    'resetch'
  ],
  async execute(message, args, client) => message.channel.overwritePermissions([
    { id: message.guild.roles.everyone.id }
  ])
  .then(ch => message.channel.send(`Sucesssfully reset the permissions for this channel.`))
  .catch(() => message.channel.send(`Unable to reset the permissions for this channel.`))
};
