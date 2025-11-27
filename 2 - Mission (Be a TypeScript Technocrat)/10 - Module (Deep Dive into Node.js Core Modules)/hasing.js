const crypto = require('crypto')

console.log('MD5 hash');
const md5Hash = crypto.createHash('md5').update("password1234").digest('hex')
console.log(md5Hash);