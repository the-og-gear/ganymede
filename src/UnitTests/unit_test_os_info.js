// NodeJS
// Grabs OS info and logs it to the console

let os = require('os');

let type = os.type();
let release = os.release();
let platform = os.platform();

let version = process.version;

console.log(`\n\x1b[4mOperating System Information\x1b[0m`);
console.log(`    OS Type: ${type}`);
console.log(` OS Release: ${release}`);
console.log(`OS Platform: ${platform}\n`);
console.log(`\x1b[4mNodeJS Information\x1b[0m`);
console.log(`NodeJS Version: ${version}\n`);