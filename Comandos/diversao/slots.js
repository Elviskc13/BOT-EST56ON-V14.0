const { Slots } = require('discord-gamecord')
const Discord = require("discord.js")

module.exports = {
    name: "slot",
    description: "Slot machine.",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {

        let member = interaction.options.getUser("membro");

		new Slots({
	        message: interaction,
	        slash_command: true,
	        embed: {
		        title: '🎰 Slot Machine',
		        color: '#5865F2'
	        }
        }).startGame();
    }
}