// NodeJS
// Main bot file, uses command handler and such to execute commands

client.on('ready', () => {
	try {
		log.success(`Client ready, loading complete in ${process.uptime()} seconds.`);
	} catch(e) {
		console.log(`Client ready, loading complete in ${process.uptime()} seconds.`);
	}
});

// Message watcher
client.on('message', message => {
	// Message recieved, Huston!
	let invoke = configs.guild.command_invoker;
	if (message.content.substring(0, invoke.length) == invoke && !message.author.bot) {
		handler.handle(message);
	}
});

// Client login, connect to Discord
try {
	client.login(configs.credentials.discord.bot_key);
} catch(e) {
	try {
		log.error(`Unable to connect to Discord!`);
	} catch(e1) {
		console.log("Unable to connect to Discord!");
	}
}