// primitive datatypes
// 7  types:  String, Number, Boolean, null, undefined,Symbol, BigInt


// Reference type (Non Primitive)
// Arrays, Objects, Functions

// const id = Symbol('123')
// const id1 = Symbol('123')
// console.log(id === id1)

const marks = [12, 34, 56, 87, 99, 100];
let iAm = {
    name: "utkarsh",
    age: 19
}

const myFun = function(){
    console.log("Hello world");
}
console.log(typeof marks)
console.log(typeof iAm)
console.log(typeof myFun)