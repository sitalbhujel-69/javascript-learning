//singleton

//Object.create

// object literals
const sym = Symbol("key")
console.log(sym)
const user = {
    name:"sital",
    [sym]: "key1",
    age:18,
    email:"anything@google.com",
    isStudying: true
}
console.log(user.name)
console.log(typeof user[sym])

user.email = "anybody@gmail.com"
// Object.freeze(user) // method to freeze an object
user.email ="abc@gmail.com"
console.log(user)

user.greeting = function (){
    console.log("Hello World.!")
}
console.log(user.greeting())

user.greeting2 = function(){
    console.log(`Hello ${this.name}`)
}
console.log(user.greeting2())