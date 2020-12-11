var crypto = require('crypto');

SMS_HMAC = () => {
    var space = " ";				// one space
	var newLine = "\n";				// new line
	var method = "GET";				// method
	//var url = "/sms/v2/services/ncp:sms:kr:262362089003:sms/messages?requestId=3b54bd56630849e09972e9d316166417";	// url (include query string)
	var url = "/sms/v2/services/ncp:sms:kr:262362089003:sms/messages/0-ESA-202012-2055265-0";	// url (include query string)
	//var url = "/sms/v2/services/ncp%3Asms%3Akr%3A262362089003%3Asms/messages/0-ESA-202012-2034416-0";	// url (include query string)
	var timestamp = "1607590914559";			// current timestamp (epoch)
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
 
var hash = SMS_HMAC();
 
var encoded_hash  = new Buffer.from(hash).toString('base64');
console.log("eq? : 88gnlU+ampIvIFn8BqwO30dpJQerH6otyHA0OiPq0Nk=");

console.log(encoded_hash);
