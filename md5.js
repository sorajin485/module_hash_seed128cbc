const EnDecryption = require('./EnDecryption.js');

var password = "moon25";
console.log("pass : ",password);
var md5_result = EnDecryption.md5(password);
console.log("md5_result : ",md5_result);