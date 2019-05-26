function checkAdmin(message, ownerOverride) {
    let user = message.member;

    return user.hasPermission("ADMINISTRATOR", true, true, ownerOverride);
}

function checkOwner(message) {
    let guildOwnerID = message.guild.owner.id;
    let userID = message.author.id;

    return guildOwnerID === userID;
}

function checkPermList(message, permList, checkAdmin, ownerOverride) {
    let user = message.member;

    return user.hasPermission(permList, true, checkAdmin, ownerOverride);
}

module.exports.checkAdmin = checkAdmin;
module.exports.checkOwner = checkOwner;
module.exports.checkPermList = checkPermList;