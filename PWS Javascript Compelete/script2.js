// Variable and values(Number, String, Boolean, etc)

// Operators

//  Conditions and loops

let age = 18;

if (age >= 18) {
    console.log("You are Allowed");
}
else{
    console.log("You are not allowed");
    
}
//    Decisions
let singnal = "pink";
if (singnal == "Red") {
    console.log("Red => S   top")
    // Condtions 1
} else if (singnal == "yellow") {
    console.log("Yellow =>GoSlow")
}
//*  Constios 2
else if (singnal == "Green") {
    console.log("Green =>Go Fast")
    }
else {
   console.log("Invalid")
}

// Switch Case

let expr = 'Mango';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


//    Loops
// Do while while,for

// for
let str = '';
for (let i = 0; i < 5; i++) {
console.log(i)
}

   While (Initialization ,condistion,incriment,deckriment)

 let n = 0;

 while (i < 5) {
     i++;
     console.log(i)
 }

let i = 0;
do {
console.log("Hello World")
    i++;
}while(i > 5)


// Ternary Operator or Ternary Codiston

// Condition ?true hoga :False
isLoggdin = true;
isLoggdin ? console.log("Buying Mer") : console.log("Not Buying")            