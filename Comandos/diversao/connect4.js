const { Connect4 } = require('discord-gamecord')
const Discord = module.require("discord.js");

module.exports = {
    name: "connect4",
    description: "Jogue com alguém.",
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

          new Connect4({
        message: interaction,
		slash_command: true,
        opponent: member,
        embed: {
          title: 'Connect 4',
          color: '#5865F2',
        },
        emojis: {
          player1: '🔵',
          player2: '🟡'
        },
        turnMessage: '{emoji} | Sua vez**{player}**!',
        winMessage: '{emoji} | **{winner}** ganhou o jogo!',
        gameEndMessage: 'O jogo ficou inacabado :(',
        drawMessage: 'É um empate!',
        askMessage: 'Eae {opponent}, {challenger} desafiou você para jogar Connect 4!',
        cancelMessage: 'O jogo foi recusado! \:(',
        timeEndMessage: 'Como o oponente não respondeu, abandonei o jogo',
      }).startGame();
  },
};