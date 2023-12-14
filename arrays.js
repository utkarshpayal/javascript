// const arr= [1,3,4,6,7]
// const myarr2 = new Array(1,2,3,4,5)
// console.log(arr)

//Array methods
// arr.push(5)
// arr.pop()

// arr.unshift(3) //add in starting
// arr.shift()

// console.log(arr.includes(5))
// console.log(arr.lastIndexOf(5))
// const newarr = arr.join()

// console.log(arr)

// console.log(typeof newarr)


//slice , splice 
// console.log("A ", arr)

// const arr1 = arr.slice(1,3)
// console.log(arr1)
// console.log("B ", arr)

// const arr2 = arr.splice(1,3)
// console.log(arr2)
// console.log("C ", arr)


const marval_hero = ["thor", "Ironman", "Spiderman"]
const dc_hero = ["Batman", "Superman", "Flash"]

// marval_hero.push(dc_hero)
// console.log(marval_hero)

// const all_hero = marval_hero.concat(dc_hero)
// console.log(all_hero)

// const all_new_heros = [...marval_hero, ...dc_hero] //spread operator
// console.log(all_new_heros)


const arr1 = [1,2,3,[4,5,6],6,[7,[8,9]]]

const usable_arr = arr1.flat(3)
console.log(usable_arr)

console.log(Array.from("utkarsh"))
console.log(Array.from({name: "utkarsh"})) //interesting

let x = 100
let x1 = 200
let x2 = 300
let x3 = 400
console.log(Array.of(x,x1,x2,x3))
