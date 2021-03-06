const axios = require('axios');
const EnDecryption = require('./EnDecryption.js');

var enc = "{\
  \"authenticate-password\": {\n\
  \"userID\" : \"test2\",\n\
  \"userPassword\" : \"cd943dc6fed752ac6e14b8e4ada29f3be7fa4755533057f64cdd7d80c871fb211ff5474be5cb70d4bbba0b7d6bb57617e7a6d01232a5f029111778240114fcef\"\n\
  }\n\
}";
var server_url = "http://192.168.0.210:3001/mslm/";
//var body = EnDecryption.encrypt
var cookiedata;
var subCookie;
var key, iv;
axios.post(server_url + "session-init", {
  "session-init": {
    "date": "20200615"
  }
})
  .then(function (response) {
    //result(null, res);
    cookiedata = response.headers["set-cookie"][0];
    console.log("res cookie : ", cookiedata);
    subCookie = cookiedata.substr(16, 32);
    console.log("cookie : ", subCookie);
    key = subCookie.substr(0, 8) + subCookie.substr(16, 8);
    iv = subCookie.substr(8, 8) + subCookie.substr(24, 8);
    console.log("key : ", key);
    console.log("iv : ", iv);
    console.log("enc : ", EnDecryption.encrypt(enc, key, iv).encryptedData);
    axios.post(server_url + "authenticate-password", {
      [EnDecryption.encrypt(enc, key, iv).encryptedData]: ""
    },
      {
        headers: {
          "Cookie" : response.headers["set-cookie"][0]
        }
      }).then((res) => {
        console.log("res : ", res.data);
        console.log("dec : ",EnDecryption.decrypt(res.data,key,iv));
      }).catch(e => {
        console.log("authenticate-password fail");
      })
  }).catch(e => {
    console.log("session-init -> fail");
    //result("session-state -> post[perfrom-operation] : fail", null);
  })