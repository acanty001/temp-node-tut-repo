const fs = require('fs')

console.log('start')

const firstReadSync = fs.readFileSync('./content/first.txt', {encoding: 'utf-8'})
const secondReadSync = fs.readFileSync('./content/second.txt', {encoding: 'utf-8'})

fs.writeFileSync('./content/result-sync.txt', `Here is the result: ${firstReadSync}, ${secondReadSync}`, {flag: 'a'})

console.log('done with this task')
console.log('starting the next one')
