import Discord, { Client } from 'discord.js';

module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message: Discord.Message) {
        message.channel.send('Pong.');
        message.channel.send('Yooo');
    },
};