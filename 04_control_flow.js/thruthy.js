let array = []
if(array.length === 0){
    console.log("array is empty")
}

let obj = {}

if(Object.keys(obj).length===0){
    console.log("object is empty")
}

// Nullish coalescing Operator (??): null undefined

let value;
value = null ?? 10
let val2 = undefined ?? 15

console.log(value) // output = 10
console.log(val2) // output = 15
let val3  = null?? 10 ?? 15
console.log(val3) //output = 10


// terniary operator
let age = 18
age >= 18 ? console.log("adult"):console.log("child")