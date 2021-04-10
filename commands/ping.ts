import Discord from 'discord.js';

module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message: Discord.Message) {
        message.channel.send('Pong.');
    },
};