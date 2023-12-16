// js is prototype based
const user = {
    username: "utkarsh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username} to my world`)
    }
    return this
}

const userOne = new User("utkarsh", 9, true)
const userTwo = new User("manjeet", 8, false)
// console.log(userOne instanceof User)
// console.log(userOne)
console.log(userTwo.greeting())