// NodeJS
// Custom logger

function logSuccess(msg) {
	console.log(`\x1b[107m\x1b[32mSUCCESS:\x1b[0m\x1b[32m${msg}\x1b[0m`);
}

function logWarning(msg) {
	console.log(`\x1b[91m\x1b[107mWARNING:\x1b[0m\x1b[91m${msg}\x1b[0m`);
}

function logError(msg) {
	console.log(`\x1b[101m\x1b97mERROR:${msg}\x1b[0m`);
	process.exit(1);
}

module.exports.success = logSuccess;
module.exports.warning = logWarning;
module.exports.error = logError;