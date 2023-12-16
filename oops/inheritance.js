class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username} is the username`)
    }
}

class Teacher extends User{
    constructor(username,email,pass){
        super(username)
        this.email = email;
        this.pass = pass;
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`)
    }
}

const chai = new  Teacher("chai", "chai@gmail.com", "123")
const tea = new  Teacher("tea", "tea@gmail.com", "123")
const tea1 = new  User("tea", "tea@gmail.com", "123")
chai.addCourse()
// tea1.addCourse()
tea.logMe()
tea1.logMe()