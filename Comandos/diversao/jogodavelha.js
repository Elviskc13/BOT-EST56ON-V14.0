const { TicTacToe } = require('discord-gamecord')
const Discord = require("discord.js")

module.exports = {
    name: "jogodavelha",
    description: "[🟢]Jogue com alguém.",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "membro",
            description: "[🟢]Selecione seu oponente.",
            type: Discord.ApplicationCommandOptionType.User,
            required: true,
        }
    ],

    run: async (client, interaction) => {

        let member = interaction.options.getUser("membro");

        new TicTacToe({
            message: interaction,
            slash_command: true,
            opponent: member,
            embed: {
                title: 'JOGO DA VELHA',
                overTitle: 'FIM DE JOGO',
                color: '#5865F2',
            },
            oEmoji: '🔵',
            xEmoji: '❌',
            blankEmoji: '➖',
            oColor: 'PRIMARY',
            xColor: 'DANGER',
            waitMessage: 'Aguardando pelo oponente.',
            turnMessage: '{emoji} **{player}** é sua vez',
            askMessage: '{opponent}, {challenger} desafiou você para um jogo a velha',
            cancelMessage: '{opponent} Jogo da velha é bom, por que recusou? \:(',
            timeEndMessage: 'Como o oponente não respondeu, larguei o jogo!',
            drawMessage: 'Foi um empate!',
            winMessage: '**{winner}** ganhou o jogo.',
            gameEndMessage: 'O jogo ficou inacabado :(',
        }).startGame();

    }
}