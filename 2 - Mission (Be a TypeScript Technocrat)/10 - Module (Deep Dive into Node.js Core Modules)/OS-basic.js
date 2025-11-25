const os = require('os')

const cpu = os.cpus()
console.log("Speed: ", cpu[0].speed);
console.log("CPU Model : ", cpu[0].model);
console.log("CPU core : ", cpu.length);