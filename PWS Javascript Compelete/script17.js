// HighOrder Function

const powerTwo = (n) => {
    return n ** 3
}

function PowerCube(powertwo, n) {
    return powerTwo(n) * n
}

// console.log(PowerCube(powerTwo, 3))

function sayhello() {
    return () => {
         console.log("Hello Vinay")
     }
}
 
let guessValues = sayhello()
// console.log(guessValues)
// guessValues()

const highOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            const threeFun = u => {
                return n + m + p + u
            }
             return threeFun
        }
        return twoFun
    }
    return oneFun
}

//console.log(highOrder(3)(4)(5)(6))

// iska use real Return ke oneFunWale

const myNums = [2, 3, 45, 67, 65]

const sumArray = arr => {   
    let total = 0
    arr.forEach(function (element) {
        total += element
    })
    return total
}
 
// console.log(sumArray(myNums))


 function onemore() {
     console.log("Hello Vinay ! ",Math.random())
 }

//  setTimeout(onemore,3000)
 setInterval(onemore,3000)

