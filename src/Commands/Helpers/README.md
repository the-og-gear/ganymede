# Command Helpers

----------

These are here to use in multiple commands, if you wish to do so. They basically are like entire functions, in one file. Examples of helpers can be seen at [my other bot's repo.](http://github.com/MASMC/Discord-To-Reddit-Bot/)

----------

### permissions.js

Possible calls:

`checkOwner(?message);` - Input is a Discord.js message object. This checks if the author of the messagei s the owner of the guild in which the message was sent.

`checkAdmin(?message, owner bypass);` - Inputs are a Discord.js message and a boolean. This checks if the author of the message has the admin permission in one of their guild roles, with optional owner allowance via the owner bypass flag.

`checkPermList(?message, perm list, admin bypass, owner bypass);` - Inputs are a Discord.js message, an array of permission flags (listed in the next section), and two booleans. This checks if the author of the message has the perms (explicit) in their roles in the guild in which the message was sent, with optional admin role bypass and owner bypass.

----------

### permission flags

These should all be self-explanatory, and if not they can be found [here, with explanations.](https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS)

The following flags are available for the array of permissions:

- `ADMINISTRATOR`
- `CREATE_INSTANT_INVITE`
- `KICK_MEMBERS`
- `BAN_MEMBERS`
- `MANAGE_CHANNELS`
- `MANAGE_GUILD`
- `ADD_REACTIONS`
- `VIEW_AUDIT_LOG`
- `PRIORITY_SPEAKER`
- `VIEW_CHANNEL`
- `READ_MESSAGES` (deprecated)
- `SEND_MESSAGES`
- `SEND_TTS_MESSAGES`
- `MANAGE_MESSAGES`
- `EMBED_LINKS`
- `ATTACH_FILES`
- `READ_MESSAGE_HISTORY`
- `MENTION_EVERYONE`
- `USE_EXTERNAL_EMOJIS`
- `EXTERNAL_EMOJIS` (deprecated)
- `CONNECT`
- `SPEAK`
- `MUTE_MEMBERS`
- `DEAFEN_MEMBERS`
- `MOVE_MEMBERS`
- `USE_VAD`
- `CHANGE_NICKNAME`
- `MANAGE_NICKNAMES`
- `MANAGE_ROLES`
- `MANAGE_ROLES_OR_PERMISSIONS` (deprecated)
- `MANAGE_WEBHOOKS`
- `MANAGE_EMOJIS`