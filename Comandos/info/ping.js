const Discord = require("discord.js")

module.exports = {
	name: "ping",
	description: "Veja o ping do bot.🌡️",
	type: Discord.ApplicationCommandType.ChatInput,

	run: async (client, interaction) => {

    	let ping = client.ws.ping;

    	let embed1 = new Discord.EmbedBuilder()
        	.setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        	.setDescription(`**carregando...**`)
        	.setColor("#000000");

    	let embed2 = new Discord.EmbedBuilder()
        	.setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        	.setDescription(`Meu ping está em \`${ping}ms\`.`)
        	.setColor("#FF0000");

    	interaction.reply({ embeds: [embed1] }).then(() => {
        	setTimeout(() => {
        		interaction.editReply({ embeds: [embed2] })
      		}, 6000)
    	})
    }
}