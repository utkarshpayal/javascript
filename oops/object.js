function multipleBy5(num){
    return num*5
}

multipleBy5.power=2
console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)

function createUser(username, score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printme = function(){
    console.log(this.score)
}
console.log(createUser.prototype)
const chai = new createUser("chai", 23)
const tea = new createUser("tea", 123)
chai.printme()
chai.increment()
chai.printme()
