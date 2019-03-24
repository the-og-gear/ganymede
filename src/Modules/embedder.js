// NodeJS
// Easily create rich embeds

function createEmbed(name, colour) {
	let e = new Discord.RichEmbed();
	e.setDescription(name);
	e.setColor(colour);
	e.setAuthor("I'm a bot!");
	return e;
}

function createEmbed(name) {
	return createEmbed(name, "null");
}

module.exports.createEmbed = createEmbed;