//primitive 7
// call by value
//String,Number,Boolean,null,undefined,symbol,BigInt


const score = 100
const scoreVal =100.3


const id =Symbol('123')
const anotherId =Symbol('123')

console.log(id==anotherId)


// non-primitive/reference
// call by refrence
// Array, Objects, Functions

const heros =["amit","akhil"]

let myObj ={
    name:"ghg",
    age:33
}

const myFunction =function (){
    console.log("Hello");
}

console.log(typeof myFunction)



