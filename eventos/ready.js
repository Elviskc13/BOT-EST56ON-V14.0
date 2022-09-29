const client = require("../index")

client.on('ready', () => {
	const atividade = [{ name: 'ferraduras.', type: 0 },
					   { name: 'Aula de programação!', type: 3 },
					   { name: 'JM - La Invernada Hornero.', type: 2 }];
	const status = [`online`, `idle`, `dnd`];

	let random1 = 0;
    setInterval(() => {
        if (random1 >= atividade.length) random1 = 0

		client.user.setActivity(atividade[random1])
        random1++
    }, 10000)

	let random2 = 0;
    setInterval(() => {
        if (random2 >= atividade.length) random2 = 0

        client.user.setStatus(status[random2])
        random2++
    }, 25000)

	console.log(`Bot logado com sucesso!`)
})