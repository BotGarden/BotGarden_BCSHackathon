import Discord from 'discord.js';

module.exports = {
    name: 'members',
    description: 'Shows the number of users in the server',
    execute(message: Discord.Message) {
        const currChannel: Discord.Guild | null = message.guild;
        let memberCountEmbed: Discord.MessageEmbed = new Discord.MessageEmbed();
        if (currChannel != null) {
            memberCountEmbed
                .setTitle(`The channel has ${currChannel.memberCount} members, including Bots`)
        } else {
            memberCountEmbed
                .setTitle("There was an error with your request");
        }
        message.channel.send(memberCountEmbed);
    },
};