import Discord from 'discord.js';

module.exports = {
    name: 'test',
    description: 'Test',
    owner: 'TestBot',
    execute(message: Discord.Message) {
        message.channel.send('Test');
    },
};