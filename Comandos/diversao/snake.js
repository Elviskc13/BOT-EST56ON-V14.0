const { Snake } = require('discord-gamecord')
const Discord = require("discord.js")

module.exports = {
    name: "snake",
    description: "Jogo da cobrinha.🐍",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {

        let member = interaction.options.getUser("membro");

		new Snake({
		    message: interaction,
		    slash_command: true,
		    embed: {
		        title: 'Snake Game',
		        color: '#5865F2',
		        OverTitle: 'Game Over',
		    },
		    snake: { head: '🟢', body: '🟩', tail: '🟢' },
		    emojis: {
		        board: '⬛',
		        food: '🍎',
		        up: '⬆️', 
		        down: '⬇️',
		        right: '➡️',
		        left: '⬅️',
        	}
    	}).startGame();
    }
}