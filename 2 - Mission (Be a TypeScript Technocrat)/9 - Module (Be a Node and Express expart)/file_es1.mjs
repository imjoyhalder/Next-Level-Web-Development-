
// const {a:x} = require('./file2')
// const {a:y} = require('./file3')

// const {add, subs} = require('./Utils')

// console.log(x,y);
// console.log(add(1,3));
// console.log(subs(5,1));

import {a} from './file_es2.mjs'
import {a as b} from './file_es3.mjs'
// console.log(a,b);

import utils from './Utils_esm/index.mjs'

console.log(utils.add(1,3));
console.log(utils.biyog(9,3));