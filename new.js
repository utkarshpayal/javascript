(function chai(){ //named IIFI
    // console.log(`DB CONNECTED`)
})();
( (name) => { // IFFI
    // console.log(`DB CONNECTED ${name}`)
})("utk");


//  *************** Control Flow ****************//

if(2 === "2"){
    console.log(5)
}



const userLoggedIn = true
const debitcard = true
if(userLoggedIn && debitcard){
    console.log(`user can buy course`)
}