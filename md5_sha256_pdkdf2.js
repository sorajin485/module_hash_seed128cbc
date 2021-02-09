const { EMFILE } = require('constants');
const EnDecryption = require('./EnDecryption.js');


var password1 = "!q2w3e4r";
var password2 = "1q2w3e4r!";
var password3 = "!q2w3e4r";
console.log("password : ",password1);
var sha512_result = EnDecryption.sha512_hex(password1);
console.log("sha512_result : ",sha512_result);
var pbkdf2_result = EnDecryption.pbkdf2("initpasswordsaltvalue",sha512_result);
console.log("final result : ",pbkdf2_result);
//var pbkdf2_first_result = EnDecryption.first_pbkdf2(sha512_result);
//console.log("salt_result : ",pbkdf2_first_result.salt,"data_result : ",pbkdf2_first_result.data);
