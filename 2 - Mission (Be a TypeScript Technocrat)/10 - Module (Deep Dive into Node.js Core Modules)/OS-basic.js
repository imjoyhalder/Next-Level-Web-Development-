const os = require('os')


console.log('\n-------------System info--------------\n');
// console.log('\n'+'-'.repeat(50)+'\n');  

console.log('\n------------Platform Details-----------\n');
console.log('OS platform: ', os.platform());
console.log('Architecture: ', os.arch());
console.log('OS type: ', os.type());
console.log("OS release: ", os.release());
console.log('Host Name: ', os.hostname());


console.log('\n---------- CPU Details--------\n');
const cpu = os.cpus()
console.log("Speed: ", cpu[0].speed);
console.log("CPU Model : ", cpu[0].model);
console.log("CPU core : ", cpu.length);
// console.log(cpu);

console.log("\n-------Memory Info-----\n");
const mem = os.totalmem()
console.log("Total Memory: ", (mem/1024/1024/1024).toFixed(2),"GB");
console.log("Free Memory: ", (os.freemem()/1024/1024/1024).toFixed(2),"GB");

console.log("\n--------UP time info---------");
const uptime = os.uptime()
const days = Math.floor(uptime/86400)
const hours = Math.floor((uptime%86400) / 3600)
const minutes = Math.floor((uptime%3600)/60)
const seconds = Math.floor((uptime%60)/60)

console.log(`${days} Days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`);
