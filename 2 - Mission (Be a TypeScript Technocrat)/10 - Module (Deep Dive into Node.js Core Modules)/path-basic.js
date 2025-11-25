const path = require('path')

console.log('file name: ', __filename);
console.log('directory: ', __dirname);  


console.log('\n'+"-".repeat(50), +"\n");

const filePath = '/joy/documents/nextLevel.pdf'

console.log('analyzing Path: ', filePath, "\n");
console.log('Directory: ', path.dirname(filePath));
console.log("Base name: ", path.basename(__filename));
console.log('File Extension: ', path.extname(filePath));