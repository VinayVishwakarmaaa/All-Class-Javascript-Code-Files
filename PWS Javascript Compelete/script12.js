// Creating an object and manipulating values in the object
//  Very har pleace per use important

let obj = { id: 101, name: "Alex", Salary: 10000 };
console.log(obj);

let emp = new Object();
emp.name = "Vinay";
emp.id = 101;
emp.Salary = 1200;
console.log(emp);

console.log(emp);

function Emp(i, n, s) {
  this.id = i;
  this.name = n;
  this.sallery = s;
}

const e = new Emp(110, "Vinay", 120000);
console.log(e);

// Data Fetch

console.log(emp.id);
console.log(emp["name"]);
emp["Salary"] = 1200;
console.log(emp);

// * all Update kar sakte hai name id sallery
emp.id = 13;
emp["name"] = "mr.vinay";

// element delet karna
delete emp.id;
// Creating an object and manipulating values in the object
//  Very har pleace per use important
