const crypto = require('crypto');
const util = require('util')
util.inspect.defaultOptions.maxArrayLength = null;
console.log(crypto.getCiphers())
