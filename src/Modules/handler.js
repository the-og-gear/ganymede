// NodeJS
// Handler module

function handle(message) {
	let command;
	let tokens = [];

	let firstSpace = message.content.indexOf(' ');
	if (firstSpace > 0) {
		command = message.content.substring(configs.guild.command_invoker.length, firstSpace);
		tokens = message.content.substring(firstSpace + 1).split(' ');
	} else {
		command = message.content.substring(configs.guild.command_invoker.length);
	}

	command = command.toLowerCase();

	try {
		client.commands.get(command).execute(message, tokens);
	} catch(e) {
		try {
			let embed = embedder.createEmbed("Command not found!", "ff0000");
			message.reply(embed);
		} catch(e1) {
			message.reply("command not found!");
		}
	}
}

module.exports.handle = handle;