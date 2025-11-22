// const {add} = require('./add')
// const {subs} = require('./substract')

// module.exports = {add, subs}

import {add} from './add.mjs'
import biyog  from './substract.mjs'


console.log(biyog(9,6));
console.log(add(10,30));


export default{
    add,
    biyog
}