let something = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(something)

let usr = {
    name:"sital",
    age:18,
    isStudying:true,
    game: function(){
        console.log("hululululu")
    }
}

console.log(usr)
// Object.defineProperty(usr,"name",{
//     writable:false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(usr,"name"))
for (const [key,value] of Object.entries(usr)) {
    if(typeof value!=='function'){
        console.log(`${key}:${value}`) 
    }
}