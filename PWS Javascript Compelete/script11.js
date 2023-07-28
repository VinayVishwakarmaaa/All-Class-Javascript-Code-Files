// Self-invoking function
//ifi imged function jo khud

// (function (arguments) {
//     console.log("Hi Is so Nice")
// })(arguments)

(function (x) {
  console.log(x);
})("Vinay is good boy ");

// Expression Function

// const reactarea = function (num1, num2) {
//     return num1 * num2
// }

// console.log(reactarea(3, 4))

// const sumTwoNumebrs = function (x,y){
//     return x + y
// }

// console.log(sumTwoNumebrs(3, 4))

const variableName = function () {
  return "Vinay";
};

console.log(variableName());
