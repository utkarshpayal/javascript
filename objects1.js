// object literals
//Object.create()

// const mySym = Symbol("key1");
// console.log(typeof mySym)
const jsUser = {
    Name: "Utkarsh",
    "Full Name": "Utkarsh Payal",
    [mySym]: "utk",
    Age: 19,
    Skills: ["java","C", "C++", "HTML", "CSS", "JS"],
    Email: "utkarsh12march2004@gmail.com"
}

const jsUser2 = {
    Name: "Manjeet",
    "Full Name": "Manjeet Agarwal",
    [mySym]: "manj",
    Age: 18,
    Skills: ["java","C", "C++", "HTML", "CSS", "JS"],
    Email: "manjeet123@gmail.com"
}
// console.log(jsUser["Email"])
// console.log(typeof jsUser[mySym])
// Object.freeze(jsUser)
// jsUser.Email = "utk@gmail.com"
// console.log(jsUser)

// jsUser.greeting = function(){
//     console.log("Hello bhai")
// }
// console.log(jsUser.greeting())

// jsUser.greetingTwo = function(){
//     console.log(`Hello bhai, ${this.Name}`)

//     console.log(`Hello bhai, ${jsUser2.Name}`)
// }
// console.log(jsUser.greetingTwo())



