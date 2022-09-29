const { Fishy } = require('discord-gamecord')
const Discord = require("discord.js")

module.exports = {
    name: "fish",
    description: "Pesque um peixe!🐟",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {

        let member = interaction.options.getUser("membro");

		new Fishy({
            message: interaction,
            fishyMessage: 'Você pegou um {fish}. Pode vender ele por ${worth} reais!',
            returnMessage: false
        }).startGame();
    }
}