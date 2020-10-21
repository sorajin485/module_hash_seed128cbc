var crypto = require('crypto');

exports.md5 = string => {
    return crypto.createHash('md5').update(string).digest('hex');
}

exports.sha256_hex = string => {
    return crypto.createHash('sha256').update(string).digest('hex');
}

exports.sha256_base64 = string => {
    return crypto.createHash('sha256').update(string).digest('base64');
}


//crypto.pbkdf2( password, salt, iterations, keylen, digest, callback )
// crypto.randomBytes(64, (err, buf) => {
//     crypto.pbkdf2('비밀번호', buf.toString('base64'), 100000, 64, 'sha512', (err, key) => {
//       console.log(key.toString('base64')); // 'dWhPkH6c4X1Y71A/DrAHhML3DyKQdEkUOIaSmYCI7xZkD5bLZhPF0dOSs2YZA/Y4B8XNfWd3DHIqR5234RtHzw=='
//     });
//   });

exports.first_pdkdf2 = string => {

    crypto.randomBytes(64, (err, buf) => {
        
        crypto.pbkdf2(string, buf.toString('base64'), 1000, 64, 'sha256', (err, key) => {
          console.log(key.toString('base64')); // 'dWhPkH6c4X1Y71A/DrAHhML3DyKQdEkUOIaSmYCI7xZkD5bLZhPF0dOSs2YZA/Y4B8XNfWd3DHIqR5234RtHzw=='
          console.log("key: ",key.toString('hex'));
          
        });
    });
    

}

exports.test_pdkdf2 = string => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(string, 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
          if (err) reject(err);
          resolve(derivedKey.toString('hex'));
        });
      });
}

exports.test2_pdkdf2 = string => {
    var buffer =crypto.randomBytes(64);
    return crypto.pbkdf2Sync(string, buffer, 1000, 64, 'sha256');
}
