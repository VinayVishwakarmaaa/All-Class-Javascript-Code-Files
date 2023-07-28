// MY Array
  
// Spread Operator
const oneArray = [1, 2, 3, 4, 5, 6, 7]
const twoArray = [1, 2, 3, 4, 5, 6,]

// const ThreeArray = oneArray.concat(twoArray)
// const threeArray = [oneArray,twoArray]

// Spread operator

// const threeArray = [...oneArray, ...twoArray]
//  console.log(threeArray)

// function textone() {
//      console.log(arguments)
// }
//  textone = (1,2,3,4)

// function textone() {
//     console.log(typeof arguments)
// }

// textone(1,2,3,4)

// function textone() {
//     console.log(arguments)
// }

// textone(1,2,3,4)

// let newArraytwo = new Array(1, 2, 3)
// console.log(newArraytwo)


// Rest operator

function manyArguments() {
    // console.log(typeof arguments)
    let args = Array.from(arguments)
    let finalArr = args.map(e => e ) //*2 MultiPlie
   console.log(finalArr)
}


function manyArguments2(...args) {
    // console.log(typeof args)
    let finalArr = args.map(e => e)
    // console.log(finalArr)
}

// manyArguments(1, 2, 3, 4)
// manyArguments2(1, 2, 3, 4, 5, 6, 7)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const sitename = "Vinay"
console.log([...sitename])

function pwskilss(...values) {
    return values
}

// console.log(pwskilss("Superman", "flash"));


//    Set

let  emptySet = new Set();
// console.log(emptySet.clear);

let myArray = [1, 2, 3, 4, 5]
let newSet = new Set(myArray)
// console.log(myArray)

let map = new Map()
// console.log(map.size)

newSet.add(90)
console.log(newSet.has(31));
newSet.clear()

