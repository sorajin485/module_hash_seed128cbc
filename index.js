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
var enc2 = "{\n\
  \"authenticate-password\": {\n\
    \"userID\" : \"MN30\",\n\
    \"userPassword\" : \"MN30\"\n\
    }\n\
}";
var dec ="DZCY6ZNdhqO5W4RJlRcTOMH0XaCWWEXH2RrSITp1MTRaSCmhQwyDOTMsbUL2t9w8dDtrdbSMueVRaQ3cZaoUBqZPGbnEFO0S/JzfNN1gi+r5Sb4rVQbIPwz4Kg1xDoSIsmvbEObRheJr0Yyny9MbEcx2owMVaQpG22QVS3R317S4ELGC55azlgH5mFp+Xw4gnbWNbEcoHtrIvCqgQd/Nn1WQYtiPMjN+KMbR/vAAAfZ/L2Ou525CgFsShlTT3sSob0hjbl7xwUC/ldDivOghtSz6ROpseAAazhGSdkBe7dh97f+tKH1H+oeBJF/kogtuwgFBVBhuM2qTlW1I0JIkw6Myh0Ax59Nme5Cr8uPawPnkmSJ4NOp2yrwJbcuen96r"
var key = "i-SkDaMvDlx_yv-y";
var iv = "k7B-GtA2kBAW2Uu-";

console.log("enc : ",enc2);
console.log("key : ",key);
console.log("iv : ",iv);

var encryptText = EnDecryption.encrypt(enc2,key,iv); 
console.log("iv : %s, encrypt : %s",encryptText.iv,encryptText.encryptedData); 

console.log("dec : ",encryptText.encryptedData);
var decryptText = EnDecryption.decrypt(encryptText.encryptedData,key,iv);
console.log("decrypt : %s",decryptText);