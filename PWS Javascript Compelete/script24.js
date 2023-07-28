// - Explanning Prototypes  // Foundation Clear karne mein


let heros = ["thor", "spiderman"]
let dcheros = ["badman","flash","superman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.vinay = function () {
    console.log(`vinay is present in all objects`)
}

console.log(heros.vinay());
console.log(heropower.vinay())

Array.prototype.heyvinay = function () {
    console.log('Vinay says hi')
}

 console.log(heros.heyvinay())
// console.log(heropower.heyvinay())


//inheritance

const User = {
    name: "top name",
    email: "top@gmail.com"
}

const Teacher = {
    makeVideos: true
} 

const TeachingSupport = {
    isAvailable: false
}

const TAAssistant = {
    makeAssinment: "JS Assinment",
     fulltime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport, Teacher)

// console.log(TAAssistant.isAvailable)

// String.prototype.truelength = function () {
//     console.log(`True length is ${this.trim().length}`);
// }


// "vinay    ".truelength()
// "vinod    ".truelength()