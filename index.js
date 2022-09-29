const Discord = require("discord.js")

const client = new Discord.Client({
	intents: [
		Discord.GatewayIntentBits.Guilds,
		Discord.GatewayIntentBits.GuildMessages,
		Discord.GatewayIntentBits.GuildMessageReactions,
		Discord.GatewayIntentBits.MessageContent,
		Discord.GatewayIntentBits.GuildMembers
	]
});

const fs = require("fs")
const path = require("path")

module.exports = client

const eventos = fs.readdirSync(path.join(__dirname, 'eventos'));
for (const file of eventos) {
	const event = require(path.join(__dirname, 'eventos', file));
	client.on(event.name, (...args) => event.run(client, ...args));
}

client.on('interactionCreate', (interaction) => {

	if (interaction.type === Discord.InteractionType.ApplicationCommand) {

		const cmd = client.slashCommands.get(interaction.commandName);

		if (!cmd) return interaction.reply(`Error`);

		interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

		cmd.run(client, interaction)
	}
})

client.slashCommands = new Discord.Collection()

require('./handler')(client)

process.on('unhandRejection', (reason, promise) => {
	client.channels.cache.get("1022830018843385928").send(` Erro Detectado 2: \`parte 1: ${reason}\`\n・\`parte 2: ${promise}\``)
});//COLOQUE A ID DE UM CHAT ENVIE O ERRO

process.on('uncaughtException', (error, origin) => {
	setTimeout(function() {

		const embed = new Discord.EmbedBuilder()
			.setTitle(`ERRO DETECTADO:`)
			.setDescription(`\`\`\`${error}\`\`\``)
			.setColor("#ffffff")
		client.channels.cache.get("1022830018843385928").send({ embeds: [embed] })
	}, 1000);
});//COLOQUE A ID DE UM CHAT ONDE ENVIE O ERRO

process.on('uncaughtExceptionMonitor', (error, origin) => { });

client.login(process.env.tokenb)