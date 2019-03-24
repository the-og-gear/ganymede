// NodeJS
// Configuration file generator for the framework bot

let toSave = {
	"credentials":{
		"discord":{
			"bot_key":""
		}
	},
	"guild":{
		"command_invoker":"/"
	}
};

let fs = require('fs');

try {
	fs.readdirSync('./src/Configuration/');
} catch(e) {
	fs.mkdirSync('./src/Configuration/');
}

fs.writeFileSync('./src/Configuration/configuration.json', JSON.stringify(toSave, null, 2));

console.log("Configuration file generated successfully.");