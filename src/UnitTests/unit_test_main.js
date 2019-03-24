// NodeJS
// Main unit test file, call for all other tests
require('./unit_test_os_info.js');

try {
	log.success(`Unit test completed after ${process.uptime()} seconds.`);
} catch(e) {
	console.log(`Unit test completed after ${process.uptime()} seconds.`);
}
process.exit(0);