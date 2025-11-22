
const {a:x} = require('./file2')
const {a:y} = require('./file3')
// const add = require('./Utils/add')
// const subs = require('./Utils/substract')

const {add, subs} = require('./Utils')

console.log(x,y);
console.log(add(1,3));
console.log(subs(5,1));