//- Class Constructor, Default values with constructor


/**
 * 1.this keybord in js is diff than other languges
 * 2. this keybord refers to keyword to the context from where we called
 * 
 * in the function constructor also
 * - if you return primitive it is ignored and we return the object refferred by this
 * - if you return a custom obj,then the custom obj is returned
 * - if dont return anything , then object referred by this is returned
 */


//  functionconstructor2

  let product = function (n, p, r) {
      this.name = n;
      this.price = p;
      this.rating = r
  }

  const d = new product("iphone", 100000, 6)
  console.log(d)

//arrowthis

let obj = {
    x: 10,
    fun(){
        y = {
            gun: ()=>{
                console.log(this.x)
          }
        }
        y.gun();
    }
}

 obj.fun()
