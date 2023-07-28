// Arrow Function

// One parameter, and a single return statement
//  const square = x => x * x;
// let output1 = square(8)
// console.log(output1)
 
// Variable mein strore karna hai to ise use kare konsa bhi sentence ho
// console.log(output1)

//2. Multiple parameters, and a single return expression

const sumOftwoNumbers = (x, y) => x + y
let output2 = sumOftwoNumbers(999,9)
console.log(output2)


// 3 .Multiple statements in function expression

const sum = (x, y) => {
    console.log(`Adding {x} and {y}`)

    return x + y
}

let output3 = sum(233,9)
 
console.log(output3)

const sumAndDifference = (x, y) => ({ sum: x + y, difference: x - y })

const output4 = sumAndDifference(32, 6)
console.log(output4); 
  
