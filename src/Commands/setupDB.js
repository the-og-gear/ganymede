// NodeJS
// Sets up the game database for use
// Only the server owner may issue this command

module.exports = {
    name: "setup",
    description: "Sets up the database with the proper values.",
    async execute(message, tokens) {
        let permHelper = require(path.join(__dirname, 'Helpers', 'permissions.js'));

        if (permHelper.checkOwner(message)) {
            setupDB(message);
        } else {
            message.reply(" you do not have permission to set up the database!");
        }
    }
}

function startupDB(message) {
    message.reply(' functionality not currently implemented. Please try again after updates.');
}