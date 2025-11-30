const fs = require('fs')

fs.writeFileSync('./Output/app.log', 'Application Started\n')
console.log('Filed created');

const logEntry1 = `${new Date().toISOString()} user logged in\n`
fs.appendFileSync('./Output/app.log', logEntry1)

const logEntry2 = `${new Date().toISOString()} data fetched\n`
fs.appendFileSync('./Output/app.log', logEntry2)