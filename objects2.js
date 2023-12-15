const tinderUser = {}

tinderUser.name = "utkarsh"
tinderUser.id = (Math.floor(Math.random(5)*100) + 85)
tinderUser.isLoggedIn = false

// // console.log(tinderUser)
// const regularUser = {
// email: "utk@gmail.com",
// fullname: {
//     firstname: "utkarsh",
//     lastname: "payal"
// },
// age : 19

// }
// console.log(regularUser.fullname?.firstname)


const ob1 = {1: "a", 2: "b"}
const ob2 = {3: "a", 4: "b"}

// const ob3 = {ob1, ob2}
// const ob3 = Object.assign({}, ob1, ob2)

const ob3 = {...ob1, ...ob2}
// console.log(ob3)

const users = [
{
    id: 1,
    email: "1@gmail.com"
},{
    id: 2,
    email: "2@gmail.com"

},{
    id : 3,
    email: "3@gmail.com"

},{
    id: 4,
    email: "4@gmail.com"

}

]

// console.log(users[0].email)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.keys(users))
// console.log(Object.values(users))
// console.log(Object.entries(users))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))