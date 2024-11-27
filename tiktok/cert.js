var fs = require("fs");
console.log(__dirname, 'cert.js')
module.exports = {
	cert: fs.readFileSync(__dirname + "/cert.pem"),
	key: fs.readFileSync(__dirname + "/key.pem"),
	passphrase: ""
};