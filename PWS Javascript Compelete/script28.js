// - +++Async and Await Fetch API+++



function createPromise() {
    return new Promise(function exec(resolve, reject) {
        // Your code goes here

        setTimeout(function f() {
            console.log("timer done");
          resolve(10)
        },3000)
    })
}


async function consume() {
    // return 10;
    console.log("inside function")
    const response = await createPromise()
   console.log("response is", response);
}

console.log("start");
consume();
console.log("end");
// console.log(consume());