const fs = require('fs')
const XLSX = require('xlsx')

const filesLength = fs.readdirSync('./files').length

let catalog = []
for (let i = 1; i <= filesLength; i++) {
  const file = XLSX.readFile(`./files/Book${i}.xlsx`)
  catalog.push(file.Sheets.Sheet1.A2.v)
  console.log(`${file.Sheets.Sheet1.A1.v} = ${file.Sheets.Sheet1.A2.v}`)
}

console.log(`The cheapest item is ${Math.min(...catalog)}`)
console.log(`The most expensive item is ${Math.max(...catalog)}`)
