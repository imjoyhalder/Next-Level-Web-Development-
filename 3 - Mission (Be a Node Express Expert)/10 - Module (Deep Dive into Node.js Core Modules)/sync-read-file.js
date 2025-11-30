const fs = require('fs')
console.log('start reading....');

try {
    const data = fs.readFileSync('./Data/dairy.txt', 'utf-8')
    console.log('file content');
    console.log(data);
} catch (error) {
    console.log(error.message);
}
console.log('Finished');