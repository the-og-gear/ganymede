// NodeJS
// Help function for the bot. Will not output if embedder is disabled, you get to write that functionality!

module.exports = {
	name: "help",
	description: "Outputs a help embed message.",
	async execute(message, tokens) {
		let embed = embedder.createEmbed("I'm here to help!", "00ffff");
		let commandFiles = fs.readdirSync('../Commands').filter(file => file.endsWith('.js'));

		let i = 0;
		for (let file of commandFiles) {
			let cmd = require(`./${file}`);
			i++;
			embed.addField(cmd.name, cmd.description);
		}
		embed.addField("Total Commands:", i);
		message.reply(embed);
	}
}