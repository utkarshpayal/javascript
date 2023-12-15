// for of

const array = [1,2,3,4,5]

for (const i of array) {
    // console.log(i);
}

//Maps

// const map = new Map()
// map.set('name', 'utkarsh')
// map.set('name1', 'Manjeet')
// map.set('name2', 'Sam')
// // console.log(map)
// for(const [key, value] of map){
//     console.log(key, ':-', value)
// }

const myObje = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'rubby',
    swift: 'swift by apple'
}

for(const val in myObje){
    // console.log(myObje[val])
}

const programming = ["js", "cpp", "py"]
for(const val of programming){
    // console.log(myObje[val])
    // console.log(`${val}`)

}




const coding = ["js", "java", "cpp", "python", "c"]
// coding.forEach(function (element) {
//     console.log(element)
// });


const mycoding = [
    {
        languageName: "java",
        languageFileName: ".java"
    },{
        languageName: "c programming",
        languageFileName: ".c"
    },{
        languageName: "cpp programming",
        languageFileName: ".cpp"
    }
]

mycoding.forEach( (element) =>  {
    
    console.log(element.languageFileName)
});


