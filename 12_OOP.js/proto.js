let superhero = ["rajeshdai","bijayshahi"]
let superpower = {
    rajeshdai: "rajesh dai doesnot have power. power has rajesh dai",
    bijayshahi: "super memory",
    getrajeshdaipower: function(){
        console.log(this.rajeshdai)
    }
}
superpower.getrajeshdaipower()
Object.prototype.sital = function(){
    console.log(`i am present in all datatypes`)
}
superpower.sital()
superhero.sital()
// inheritence
const driver = {
    license: true,
    knowsdriving: true
}
const khale = {
    license: false,
    knowsdriving: false
}
const owner ={
    money: 5000,
    license: true,
    __proto__:khale
}
khale.__proto__ = driver

//modern syntax
Object.setPrototypeOf(khale,driver)
let user = "sital    "
String.prototype.truelength = function(){
   console.log(`true length is ${this.trim().length}`)
}
user.truelength()