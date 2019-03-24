# Discord-Bot-Framework
Discord bot framework - Just add commands!

-----------

This is a bot framework, designed for those who don't want to set up a bot themselves with the hassle of making it secure and efficient with command handling. The framework is modular, to make for easy command, module, and helper creation.

-----------

The options available for running the bot are `-t` to run unit tests, `-l` to disable the logger, and `-e` to disable the embedder plugin.

-----------

To set up the bot:
1. Follow the process of getting a bot user and adding it to your Discord server
2. Download this code and modify as you please
3. Run `npm install` in the main directory
4. Run `node config_gen.js` in the main directory
5. Modify the configs as you please in `./src/Configuration`
6. Run `node start.js` with optional switches in the main directory.

-----------

You can use PM2 to automatically restart the bot when it goes down, or for better monitoring of the bot and its resource usage.