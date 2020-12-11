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
    var buffer =crypto.randomBytes(4);
    return { salt : buffer ,data : crypto.pbkdf2Sync(string, buffer, 1000, 64, 'sha256') };
}

//sign in
exports.pdkdf2 = (salt,string) => {
    return crypto.pbkdf2Sync(string, salt, 1000, 16 , 'sha256');
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
    Buffer.from(text, 'base64'); 
  
 // Creating Decipher 
 let decipher = crypto.createDecipheriv( 
    'seed-cbc', Buffer.from(key), iv); 
  
 // Updating encrypted text 
 let decrypted = decipher.update(encryptedText); 
 decrypted = Buffer.concat([decrypted, decipher.final()]); 
  
 // returns data after decryption 
 return decrypted.toString(); 
} 

SMS_HMAC = (method, url, timestamp, accessKey, secretKey) => {
    var space = " ";				// one space
	var newLine = "\n";				// new line
	var method = "GET";				// method
	var url = "/sms/v2/services/ncp%3Asms%3Akr%3A262362089003%3Asms/messages/0-ESA-202012-2034416-0";	// url (include query string)
	var timestamp = "1607492312025";			// current timestamp (epoch)
	var accessKey = "DCLTeUiKhM61KK3ZS64Q";			// access key id (from portal or Sub Account)
	var secretKey = "W9tJSEoF2MwsNFrHw6Ez3D9epMj3WIIFTTZjDVp6";			// secret key (from portal or Sub Account)


    // 암호화 객체 생성, sha256 알고리즘 선택
    var hmac = crypto.createHmac('sha256', secretKey);
 
    hmac.update(method);
	hmac.update(space);
	hmac.update(url);
	hmac.update(newLine);
	hmac.update(timestamp);
	hmac.update(newLine);
	hmac.update(accessKey);

    // 암호화할 본문 생성
    //timestamp = new Date().getTime();
    //var message = new Buffer.from(payload + timestamp).toString('base64');
 
    //hmac.write(message);
    hmac.end();
 
    return hmac.read();
}
{/* 
// Encrypts output 
var output = encrypt("GeeksforGeeks"); 
console.log(output); 
  
// Decrypts output 
console.log(decrypt(output)); 
*/}