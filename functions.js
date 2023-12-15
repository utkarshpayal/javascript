

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
// console.log(loginUserMessage())

function calculateCartPrice(val1, ...num1){
    return num1
}

// console.log(calculateCartPrice(100,200,300,400))

const user = {
    name: "utkarsh",
    age: 19

}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`)
}

handleObject(user)


const my_arr = [1,2,3,4,5,6,7,8,9]
function arrayhandle(getarray){
    return getarray[1]
}
console.log(arrayhandle(my_arr))