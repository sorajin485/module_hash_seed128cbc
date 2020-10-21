const hash = require('./hash.js');
// const util = require('util')
// util.inspect.defaultOptions.maxArrayLength = null;
// console.log(crypto.getHashes())

// var result
// result= hash.test2_pdkdf2("asd");
// console.log("result : ",result);
// console.log("result.base64 : ",result.toString("base64"));
//console.log(test_crypto);

// Node.js program to demonstrate the      
// crypto.createCipheriv() method 
  
// Includes crypto module 
const crypto = require('crypto'); 
  
// Difining algorithm 
const algorithm = 'aes-256-cbc'; 
  
// Defining key 
//const key = crypto.randomBytes(32); 
//const key = crypto.randomBytes(16); 
//const key = ['88','E3','4F','8F','08','17','79','F1','E9','F3','94','37','0A','D4','05','89']; 
const key = '1234567891234567'; 
  
// Defining iv 
//const iv = crypto.randomBytes(16); 
//const iv = ['26','8D','66','A7','35','A8','1A','81','6F','BA','D9','FA','36','16','25','01']; 
const iv = '1234567891234567'; 
  
// An encrypt function 
function encrypt(text) { 
     // Creating Cipheriv with its parameter 
     let cipher = crypto.createCipheriv('seed-cbc', Buffer.from(key), iv); 
     // Updating text 
     let encrypted = cipher.update(text); 
     // Using concatenation 
     encrypted = Buffer.concat([encrypted, cipher.final()]); 
     // Returning iv and encrypted data 
     return { iv: iv.toString('hex'),encryptedData: encrypted.toString('hex') }; 
} 
function decrypt(text) {
    //let textParts = text.split(':');
    //let iv = Buffer.from(textParts.shift(), 'hex');
    //let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv('seed-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(text);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}  
// Displays output 
var encryptText = encrypt("sjpsjp"); 
console.log("iv : %s, encrypt : %s",encryptText.iv,encryptText.encryptedData); 
var decryptText = decrypt(encryptText.encryptedData);
console.log("decrypt : %s",decryptText);