const { RockPaperScissors } = require('discord-gamecord')
const Discord = require("discord.js")

module.exports = {
    name: "ppt",
    description: "Jogue com alguém.🌑🧾✂️",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "membro",
            description: "Selecione seu oponente.",
            type: Discord.ApplicationCommandOptionType.User,
            required: true,
        }
    ],

    run: async (client, interaction) => {

        let member = interaction.options.getUser("membro");

        new RockPaperScissors({
            message: interaction,
            slash_command: true,
            opponent: member,
            embed: {
                title: 'Pedra Papel Tesoura',
                description: 'Faça sua escolha!',
                color: '#5865F2',
            },
            buttons: {
                rock: 'Rock',
                paper: 'Paper',
                scissors: 'Scissors',
            },
            emojis: {
                rock: '🌑',
                paper: '📃',
                scissors: '✂️',
            },
            othersMessage: 'You are not allowed to use buttons for this message!',
            chooseMessage: 'You choose {emoji}!',
            noChangeMessage: 'You cannot change your selection!',
            askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Rock Paper Scissors!',
            cancelMessage: 'Looks like they refused to have a game of Rock Paper Scissors. \:(',
            timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
            drawMessage: 'It was a draw!',
            winMessage: '{winner} won the game!',
            gameEndMessage: 'The game went unfinished :(',
        }).startGame();
    }
}