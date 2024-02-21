const user = {
    username:"sital",
    price:199,

    welcome: function(){
        console.log(`${this.username}, welcome to the website.`)
        console.log(this)
    }
}
user.welcome(); //output :sital, welcome to the website.
// { username: 'sital', price: 199, welcome: [Function: welcome] }
user.username = "bhujel" 
user.welcome() //ouptput: bhujel, welcome to the website. //{ username: 'bhujel', price: 199, welcome: [Function: welcome] }

console.log(this)

const hello = function (){
    console.log("Hello world!")
    let user = "unknown"
    console.log(this)
}
hello()

const pi = ()=>{
    let user = 'unknown'
    console.log(this)
}
pi()

const sum = (num1,num2)=> num1+num2
console.log(sum(6,6))
const retrn = ()=> ({username:"sital69"}) //to return object it must be wrapped in curly braces and parantheses
console.log(retrn())