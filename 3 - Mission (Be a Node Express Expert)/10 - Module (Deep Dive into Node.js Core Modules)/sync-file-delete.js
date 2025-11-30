
const { error } = require('console');
const fs = require('fs')

fs.writeFileSync('./Output/temp.txt', "Hey Next level developer\nYou are a bokachoda developer")

if (fs.existsSync('./Output/temp.txt')) {
    fs.unlinkSync('./Output/temp.txt')
    console.log('File deleted Successfully');
}

try {
    fs.unlinkSync('./Output/temp.txt')
} catch (error) {
    console.log(error.message);
}


fs.writeFile('./Output/temp2.txt', 'Hey man how are you\nHow is going your time', (err)=>{
    if(err){
        return console.error(err)
    }
    console.log('Another file created');

    fs.unlink('./Output/temp2.txt', (err)=>{
        if(err){
            console.error('Error: ', err.message);
        }
        else{
            console.log('File deleted successfully');
        }
    })
})
