/* Array Methods 4 */

let arr = [1, 2, 3, 4, 5]

// Unlimeted Array Add kar Sakte hai
arr.push(6, 7, 8, 9, 10)
console.log(arr)

//*  Last ka element Remove ho jayega
arr.pop()
console.log(arr)

//*Starting Element Remove ho jayega

// arr.shift()
// console.log(arr)

// *Starting Se element add karne ke liye

arr.unshift(1)
console.log(arr)

// Jo element delete huya hai use return kar deta  hai

let f = arr.shift()
console.log(arr)        

// ** -> concat ek new array deta hai 
let a1 = [1, 2, 3, 4, 5]
let a2 = [1, 2, 3]
let a3 = a1.concat(a2)
console.log(a1, a2, a3)


// * yeh club me add kar dega
let s = a1.join("@")
console.log(s)


// Club Ko Reverse kar dega

// a1.reverse()
// console.log(a1)


// Piche ki element ko btata hai jaise ek pich ke ek 1 baar hi ek hi element ka dekh sakt hai

console.log(a1.indexOf(3))

// ** Is se Fetch bich ka elment jaise 2 se apn ko dekhna hai 8 to (2,8) daal to or result dekho 
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr1.slice(2, 7))

//* starting add kar sakte hai bich me Element add kar sakte hai or 3 element hatana hai to hat jayenge is code splice se
arr1.splice(9, 0, 10);
console.log(arr1)
