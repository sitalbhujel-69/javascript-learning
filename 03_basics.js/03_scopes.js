var c = 100
if(true){
    let a = 1
    const b = 2
    var c = 3
    
}
// console.log(a)  //output  = error
// console.log(b)  //output = error
console.log(c) // output = 3  

function one(){
    const username = "sital"
    function two(){
        const website = "google"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()


//+++++++++++++++++++++++++mini hoisting++++++++++++++++++++++

console.log(addone(99)) //output = 100
function addone(num){
    return num+1
}

console.log(addtwo(98)) // output = error
let addtwo = function(num){
    return num+2
}