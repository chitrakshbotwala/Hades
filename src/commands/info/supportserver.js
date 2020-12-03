const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class SupportServerCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'supportserver',
      aliases: ['support', 'ss'],
      usage: 'supportserver',
      description: 'Displays the invite link to Calypso\'s Discord Support Server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Support Server')
      .setThumbnail('https://images-ext-2.discordapp.net/external/e8tIQ1_uVlmvlsUBilaphdctMiZUlyJNR277Q5bfynw/https/cdn.discordapp.com/icons/587516620671287321/25e456f64708af2dc7561a22d4a12767.webp')
      .setDescription('Click [here](https://discord.gg/gutFxXWJ) to join the Hades Support Server!')
      .addField('Other Links', 
        '**[Invite Me](https://discord.com/api/oauth2/authorize?client_id=730047058219761724&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D730047058219761724%26permissions%3D8%26scope%3Dbot&scope=bot) | ' +
        '[Github Page](https://github.com/chitrakshbotwala)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
