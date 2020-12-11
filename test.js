// const crypto = require('crypto');
// const util = require('util')
// util.inspect.defaultOptions.maxArrayLength = null;
// console.log(crypto.getCiphers())

console.log(new Date().getTime());

SMS_body = {
    "type":"SMS",
    "contentType":"COMM",
    "countryCode":"82",
    "from":"01092425927",
    "content":"내용",
    "messages":[
        {
            "to":"01092425927",
            "content":"위의 content와 별도로 해당 번호로만 보내는 내용(optional)"
        }
    ]
  }

  
console.log("SMS_BODY : ",SMS_body);
console.log("SMS_BODY_messages : ",SMS_body.messages);
console.log("SMS_BODY_messages_content : ",SMS_body.messages[0].content);
SMS_body.messages[0].content = "good";
console.log("SMS_BODY_messages_content : ",SMS_body.messages[0].content);
