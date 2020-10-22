const EnDecryption = require('./EnDecryption.js');



var encryptText = EnDecryption.encrypt("sjpsjp"); 
console.log("iv : %s, encrypt : %s",encryptText.iv,encryptText.encryptedData); 
var decryptText = EnDecryption.decrypt(encryptText);
console.log("decrypt : %s",decryptText);