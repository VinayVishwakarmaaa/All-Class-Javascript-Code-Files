// For each, map, filter and reduce and every, find, sort

let arr = [1,2, 3, 4]

arr.forEach(function (element, index, arr) {
    // console.log(element,index,arr);
})

const heros = ["Vinay", "kasnay", "Hamit", "Samnay"]
// heros.forEach((el) =>{console.log(el.toUpperCase())})
heros.forEach((el) => { console.log(el.toLowerCase()) })

arr.map(function (element, index, arr) {
    console.log(element,index,arr);
})

heros.map((el) => { console.log(el.toUpperCase()) })

// fillter

console.log(heros)
const heroswithnay = heros.filter((h) => {
   return h.endsWith('nay')
})

console.log(heroswithnay);

// Shopping Card

const cardBill = [82.76]
const sumOfCardBill = cardBill.reduce((prev, curr) => prev
    + curr, 0)
console.log(sumOfCardBill)
    
// Game 
 const gameScore = [200, 300, 310, 250,150, "Vinay"]
// Check if all values are numbers
// console.log(typeof gameScore[1])
const gameScoreCheck = gameScore.every((v) => typeof v ===
    "number")

console.log("Check:", gameScoreCheck)
    
// find Score Above 200 very

const above200 = gameScore.find((score) => score > 200)

console.log(above200)

// findIndex
// some
// Sort
