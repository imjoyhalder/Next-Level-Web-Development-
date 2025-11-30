const fs = require('fs')
console.log('Staring......');

fs.readFile('./Data/dairy.txt', 'utf-8', (error, data)=>{
    if(error){
        console.log('Error: ', error.message);
    }
    else{
        console.log('file content: ');
        console.log(data);
    }
})
console.log("Finished");