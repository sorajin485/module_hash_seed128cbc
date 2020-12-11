const EnDecryption = require('./EnDecryption.js');


var password = "test";
var md5_result = EnDecryption.md5(password);
console.log("md5_result : ",md5_result);

var sha256_result = EnDecryption.sha256_hex(md5_result);
console.log("sha256_result : ",sha256_result);

// var first_pdkdf2_result= EnDecryption.first_pdkdf2(sha256_result);
// console.log("first_pdkdf2_result salt : ",first_pdkdf2_result.salt);
// console.log("first_pdkdf2_result data : ",first_pdkdf2_result.data.toString('hex'));

// var sha256_result2 = EnDecryption.sha256_hex(""+sha256_result);
// console.log("sha256_result2 : ",sha256_result2);
// var sha256_result3 = EnDecryption.sha256_hex(sha256_result+"");
// console.log("sha256_result3 : ",sha256_result3);



var pdkdf2_result= EnDecryption.pdkdf2("",sha256_result);
//console.log("first_pdkdf2_result salt : ",pdkdf2_resulsalt);
//console.log("first_pdkdf2_result data : ",pdkdf2_result.toString('hex'));
console.log("pdkdf2_result  : ",pdkdf2_result.toString('hex'));
