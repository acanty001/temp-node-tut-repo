// const {readFileSync, writeFileSync} = require("fs")
const fs = require("fs")

console.log('start')

const first = fs.readFileSync("./content/first.txt", "utf-8")
const second = fs.readFileSync("./content/second.txt", "utf-8")
const third = fs.writeFileSync(
  "./content/third.txt", 
  "Yooo this is the third text file and this file was created with the writeFileSync() method from the File Systems Module.", 
  {flag: 'a'}
)

const readAndWriteFile = 
fs.readFile("./content/third.txt", {encoding: "utf-8"}, (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const firstRes = result

  fs.readFile('./content/second.txt', {encoding: 'utf-8'}, (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const secondRes = result
    fs.writeFile('./content/result-sync.txt', `here is the result: ${firstRes}, ${secondRes}`, (err, result) => {
      if (err) {
        console.log(err)
        return
      }
      console.log('done with this task')
    })
  })
})

console.log('starting the next task')
// const fifth = fs.writeFile()

console.log(first, second, third, readAndWriteFile)
