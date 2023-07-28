// - Defining a classes, Class Instantiation
// ++++++++++++++++++++++++++++++
// What are classes and objects

//  ClassIndudation

class product{
    //Properties > variables > data Memeber
    name;
    price;
    //rating; //nhi likhenge to kaam ho jayega
    #rating;
    constructor(n,p,r) {
        //console.log("calling the constructor")
        this.name = n;
        this.price = p;
        this.#rating = r;
      //  return 10, //if you,re  returinig primitive then it will be avoided in constructor
             //   { x: 0, y:20} //if you return non primitive the it will be returned
    }
           // Class methods and Properties with initial value
    
    
    static custom() {
        console.log("calling a static method")
    }


    // Getter and Setter
    getRating () {
        console.log(this.#rating)
    }
    
    setRating(r){
        if (r < 0) return
        this.#rating = r;
    }

    //behavior > functions > member functions
     display() {
        console.log("displaying the current Product",this.name,this.price,this.#rating)
 }
 }

 const p = new product("iphone",100000,5)// new > creates an empty plain object
// in the above piece of code we are calling the constructor method
 console.log(p)
  p.display()
 product.custom();
 //p.name = "Samsung s23"
//console.log(p.rating)
// p.rating = 10;
p.setRating(10)
p.getRating()


//  ComplexNumber Interview\

class ComplexNumber {
    #real
    #imag
    constructor(r, i) {
        this.#real = r
        this.#imag = i
    }

    display() {
        console.log(this.#real, "+ i",this.#imag)
    }
    get real(){
        return this.#real
    }
    get imag() {
        return this.#imag
    }
    addComplexNumber(c) {
        this.#real += c.real;
        this.#imag += c.imag;
    }
}
        
const c1 = new ComplexNumber(2, 3)
c1.display();
const c2 = new ComplexNumber(4, 5)
c1.addComplexNumber(c2)
c1.display()