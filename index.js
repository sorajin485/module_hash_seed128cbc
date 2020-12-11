const EnDecryption = require('./EnDecryption.js');
//var enc ="1233";
var enc = "{\n\
    \"set-tx-configuration\": {\n\
        \"tx-ip\": \"192.168.0.210\",\n\
        \"port-1\": \"1233\",\n\
        \"port-2\": \"1234\",\n\
        \"port-3\": \"1235\",\n\
        \"port-4\": \"1236\",\n\
        \"port-5\": \"1237\",\n\
        \"userKey\":\"2\",\n\
        \"subscriptionKey\": \"1\",\n\
        \"iLOport\": \"local\"\n\
    }\n\
}";

var dec ="qkrBTpBMAefxLuhEz+iha209TW7qDZ2q5jOH/pnnYz3DPDOnHN/29WI8za107w4Dj8ecFtgdUVSf+1XBMK5FrI7F8QkLZjZkmcb8X51SN/O1ppGCEgKXaXKl5vIVNZHFu7Gw6nyu+zH/QQmezxGhreq058qCjZ5wj8UCE2WwpZi2TSafGmxVPvf3ZxdRK+5tI53fzTjTgDKsBaDYa2hBmx/uy55v8mcXYTZUjSTm23PtCibmMQW7cDQG0hhdNuzv4XpXnX1E7HpatAXTH1hrJiYo8WZAwf9FE7XspF2UmYz8lF2+DusT97RDoDBfmrzusZ0bnbzjUK+Lt/7x32HvaQ=="

console.log("enc : ",enc);
var encryptText = EnDecryption.encrypt(enc); 
console.log("iv : %s, encrypt : %s",encryptText.iv,encryptText.encryptedData); 

console.log("dec : ",dec);
var decryptText = EnDecryption.decrypt(dec);
console.log("decrypt : %s",decryptText);