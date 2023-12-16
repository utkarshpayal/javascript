// let myName = "utkarsh    "

// console.log(myName.trim().length)

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);

    }
}


Object.prototype.utkarsh = function(){
    console.log('utkarsh is present in all objects')
}
Array.prototype.utkarsh1 = function(){
    console.log('utkarsh1  is present in all objects')
}
// heroPower.utkarsh()
// myHeros.utkarsh()


const User = {
    name: "utk",
    email: "utk@gmail.com"
}
const Teacher = {
    makeVideo: true

}
const TeachingSupport = {
    isAvailable: true
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // __proto__:TeachingSupport

}

// Teacher.__proto__ = User

// console.log(TASupport.isAvailable)
Object.setPrototypeOf(TeachingSupport, Teacher)


//****************Call, Bind ***************//
  //1. call



function setUserName(username){
    //complex DB calls
    this.username = username;

}
function createUser(username, email, password){
    setUserName.call(this,username)
     
    this.email = email;
    this.password = password;


}
const chai = new createUser("chai", "chai@gmail.com", "123")
console.log(chai)