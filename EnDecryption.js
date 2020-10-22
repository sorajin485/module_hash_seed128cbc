// Includes crypto module 
var crypto = require('crypto');

//md5
exports.md5 = string => {
    return crypto.createHash('md5').update(string).digest('hex');
}

//sha256_hex
exports.sha256_hex = string => {
    return crypto.createHash('sha256').update(string).digest('hex');
}

//sha256_base64
exports.sha256_base64 = string => {
    return crypto.createHash('sha256').update(string).digest('base64');
}

//sign up, create salt
exports.first_pdkdf2 = string => {
    var buffer =crypto.randomBytes(64);
    return { salt : buffer ,data : crypto.pbkdf2Sync(string, buffer, 1000, 64, 'sha256') };
}

//sign in
exports.pdkdf2 = (salt,string) => {
    return crypto.pbkdf2Sync(string, salt, 1000, 64 , 'sha256');
}


// Node.js program to demonstrate the      
// crypto.createDecipheriv() method 
  
// Difining algorithm 
const algorithm = 'seed-cbc'; 
  
// Defining key 
const key = "1234567891234567"
  
// Defining iv 
const iv = "1234567891234567" 
  
// An encrypt function 
exports.encrypt = (text) => { 
  
 // Creating Cipheriv with its parameter 
 let cipher =  crypto.createCipheriv('seed-cbc', Buffer.from(key), iv); 
  
 // Updating text 
 let encrypted = cipher.update(text); 
  
 // Using concatenation 
 encrypted = Buffer.concat([encrypted, cipher.final()]); 
  
 // Returning iv and encrypted data 
 return { iv: iv.toString('hex'), 
     encryptedData: encrypted.toString('base64') }; 
} 
  
// A decrypt function 
exports.decrypt = (text) => { 
  
 //let iv = Buffer.from(text.iv, 'hex'); 
 let encryptedText = 
    Buffer.from(text.encryptedData, 'base64'); 
  
 // Creating Decipher 
 let decipher = crypto.createDecipheriv( 
    'seed-cbc', Buffer.from(key), iv); 
  
 // Updating encrypted text 
 let decrypted = decipher.update(encryptedText); 
 decrypted = Buffer.concat([decrypted, decipher.final()]); 
  
 // returns data after decryption 
 return decrypted.toString(); 
} 
{/* 
// Encrypts output 
var output = encrypt("GeeksforGeeks"); 
console.log(output); 
  
// Decrypts output 
console.log(decrypt(output)); 
*/}