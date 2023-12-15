const user = {
    username: "utkarsh",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website `)
    }

}

// console.log(this)
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// function chai(){
//     let username = "utkarsh"
//     // console.log(this.username)
// }
// chai()

const chai = ()=>{
    let username = "utk"
    console.log(this)
}
// chai()


const addTwo = (num1, num2)=> (num1  + num2)

console.log(addTwo(2,3))
