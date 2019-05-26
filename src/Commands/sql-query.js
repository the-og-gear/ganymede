// NodeJS
// SQL Query command

module.exports = {
    name: "sqlquery",
    description: "Creates an SQL query to the database.",
    async execute(message, tokens) {
        // We want to check if the user has a role with admin rights, OR if the user is the owner, prior to calling
        if (checkAdmin(message)) {
            executeSql(message, tokens);
        } else {
            message.reply(' you don\'t have the required permissions to execute a request!');
        }
    }
}

function checkAdmin(message) {
    let user = message.member;

    // ?GuildMember.hasPermission(PermissionResolvable, [explicit], [checkAdmin], [checkOwner])
    return user.hasPermission("ADMINISTRATOR", true, true, true);
}

function executeSql(message, tokens) {
    let query = '';
    tokens.forEach(t => {
        query += `${t} `;
    });
    query = query.trim(); // Remove the trailing whitespace

    // Get the pool connection
    pool.getConnection((err, connection) => {
        if (err) {
            message.reply(` there was an error getting the connection from the pool!`);
            console.log(err);
            return false;
        }

        connection.query(query, (err1, result) => {
            if (err1) {
                message.reply(` there was an error processing your query.`);
                connection.rollback(); // Rollback, so we don't make changes to the db
                console.log(err1);
                return false;
            }

            message.reply(` the query has processed successfully!\nResult:\n\`\`\`${JSON.stringify(result, null, 2)}\n\`\`\``);

            connection.release(); // Return the connection to the pool for later use.
        });
    });
}