// const month = 4
// switch(month){
//     case 1:
//         console.log(`january`);
//         break;
//     case 2:
//         console.log(`feb`);
//         break;
//     case 3:
//         console.log(`march`);
//         break;

//     case 4:
//         console.log(`april`);
//         break;
//     default: 
//         console.log(`default`);
//         break;

// }

//**************** Truthy and Falsy values********//

//false: 0 , -0, BigInt 0n, "", null, undefined, NaN
//true: rest all values (eg: "0", 'false', " ", [], {}, function(){})

// const useremail = []
// if(useremail.length===0){
//     console.log(`empty`)
// }

const useremail = {}
if(Object.keys(useremail).length === 0){
    // console.log(`empty`)
}

//Nullish Coalescing Operator (??): null undefined
// let val1;
// val1 = 5 ?? 10
// console.log(val1)
// val1 = null ?? 10
// console.log(val1)


//Terniary Operator
//condition ? true : false

const iceTea = 100
iceTea >= 90 ? console.log(`more than 80`) : console.log(`less than 80`)