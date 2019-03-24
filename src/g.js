// NodeJS
// Global configuration file
class g {

	constructor(testing, logger, embedder) {
		this.configSkip = testing;
		if (logger) setUpLogger();
		continueSetUp(testing, this.configSkip, embedder);
	}

	setUpLogger() {
		let logLoadStart = process.hrtime();
		global.log = require('./Modules/logger.js');
		let logLoadEnd = process.hrtime(logLoadStart);
		try {
			log.success(`Logger initialized successfully in ${logLoadEnd[0]}s ${logLoadEnd[1] / 1000000}ms`);
		} catch(e) {
			console.log("Error setting up the logger, please see error logs.");
			let tempFS = require('fs');
			tempFS.mkdirSync('./Logs/');
			tempFS.writeFileSync(`Logger attempted to load for ${logLoadEnd[0]}s ${logLoadEnd[1] / 1000000}ms. Stack trace:\n${e}`, `../Logs/${new Date()}.log`);
		}
	}

	continueSetup(testing, skip, embedder) {
		// Load discord.js
		global.Discord = require('discord.js');

		// Load file system for outputting
		global.fs = require('fs');

		// Check and/or load embedder
		if (embedder) {
			let embedLoadStart = process.hrtime();
			global.embedder = require('./Modules/embedder.js');
			let embedLoadEnd = process.hrtime(embedLoadStart);
			try {
				log.success(`Embedder loaded in ${embedLoadEnd[0]}s ${embedLoadEnd[1] / 10000000}ms`);
			} catch(e) {
				console.log(`Embedder loaded in ${embedLoadEnd[0]}s ${embedLoadEnd[1] / 1000000}ms`);
			}
		}

		// Load configs, if we aren't testing and we weren't told to skip
		if (!testing && !skip) {
			let configLoadStart = process.hrtime();
			global.configs = JSON.parse(fs.readFileSync('./Configuration/configuration.json'));
			let configLoadEnd = process.hrtime(configLoadStart);
			try {
				log.success(`Config files loaded in ${configLoadEnd[0]}s ${configLoadEnd[1] / 1000000}ms`);
			} catch(e) {
				console.log(`Config files loaded in ${configLoadEnd[0]}s ${configLoadEnd[1] / 1000000}ms`);
			}
		} else {
			try {
				log.warning(`Config loading skipped!`);
			} catch(e) {
				console.log(`Config loading skipped!`);
			}
		}

		/* ---------- Load your APIs here ------------ */

		/* ----------   End API loading   ------------ */

		// Create the client and load commands into it
		global.client = new Discord.Client();

		client.commands = new Discord.Collection();
		let commandLoadStart = process.hrtime();
		let commandFiles = fs.readdirSync('./src/Commands/').filter(file => file.endsWith('.js'));
		let i = 0;
		for (let file of commandFiles) {
			let command = require(`./Commands/${file}`);
			i++;
			client.commands.set(command.name, command);
		}
		let commandLoadEnd = process.hrtime(commandLoadStart);
		try {
			log.success(`${i} commands loaded in ${commandLoadEnd[0]}s ${commandLoadEnd[1] / 1000000}ms`);
		} catch(e) {
			console.log(`${i} commands loaded in ${commandLoadEnd[0]}s ${commandLoadEnd[1] / 1000000}ms`);
		}

		// Load the command handler
		let handlerLoadStart = process.hrtime();
		global.handler = require('./Modules/handler.js');
		let handlerLoadEnd = process.hrtime(handlerLoadStart);
		try {
			log.success(`Command handler loaded in ${handlerLoadEnd[0]}s ${handler.LoadEnd[1] / 1000000}ms`);
		} catch(e) {
			console.log(`Command handler loaded in ${handlerLoadEnd[0]}s ${handler.LoadEnd[1] / 1000000}ms`);
		}

		// Run the unit tester, if we are testing
		if (testing) require('./UnitTests/unit_test_main.js');

		// We reached this point, we need to run the client!
		require('./bot.js');
	}
}

module.exports = g;