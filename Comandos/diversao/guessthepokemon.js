const { GuessThePokemon } = require('discord-gamecord')
const Discord = require("discord.js")

module.exports = {
    name: "pokemon",
    description: "Quem é esse pokémon?🐲",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {

        let member = interaction.options.getUser("membro");

		new GuessThePokemon({
            message: interaction,
            slash_command: true,
            embed: {
                title: 'Quem é esse Pokemon?',
                footer: 'Você tem 1 chance!',
                color: '#5865F2',
            },
            time: 60000,
            thinkMessage: '**Thinking...**',
            winMessage: 'Boa! Seu nome é **{pokemon}**',
            stopMessage: 'Mais sorte na próxima! Ele é **{pokemon}**',
            incorrectMessage: 'Não! Seu nome é **{pokemon}**',
        }).startGame();
    }
}