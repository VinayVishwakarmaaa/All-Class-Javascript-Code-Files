// Object Methods


let emp = {
    id: 101,
    name: 'vinay',
    age: 24
};

console.log(emp)


// is all element keys nikal aati hai
let keys = Object.keys(emp);
console.log(keys);

// is se iski values nikal aati hai
let values = Object.values(emp)
 console.log(values)

// is se all elemet employee details nikal aayegi
const entries = Object.entries(emp)
console.log(entries)

// change in id methods

emp.id = 13
console.log(emp)

emp['name'] = 'Vinay Vi'
console.log(emp)

// kisi properties ko me update na kar payenge

Object.freeze(emp)

//* Object.seal kisi bhi element ko add kar sakte hai
Object.seal(emp);

emp['name'] = 'vinay'
delete emp.name
console.log(emp)

// let o = Object.assign([x:23],emp) se element o me saare element aa jayenge or add bhi ho jaynege

let o = Object.assign({x:23}, emp);
console.log(o)




