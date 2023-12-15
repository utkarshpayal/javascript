

function makeMyName(){
    console.log("U")
    console.log("T")
    console.log("K")
    console.log("A")
    console.log("R")
    console.log("S")
    console.log("H")


}
// makeMyName()

// function addTwoNum(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNum(number1, number2){
    return  number1 + number2
   
}

const result = addTwoNum(3,5)
// console.log("Result:", result)


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Utkarsh"))
console.log(loginUserMessage())