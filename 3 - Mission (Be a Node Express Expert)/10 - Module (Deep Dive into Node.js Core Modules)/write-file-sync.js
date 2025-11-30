const { error } = require('console');
const fs = require('fs')

const content1  = "Hello man how are you  . do you know about node js"
try {
    fs.writeFileSync('./Output/test-async.txt',content1)
    console.log('File write async');
} catch (error) {
    console.log(error.message);
}

const content2 = "This is async too"
fs.writeFile('./Output/test-async.txt',content2,(error)=>{
    if(error){
        console.log(error.message);
    }
    else{
        console.log('File written successfully');
    }
})