const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
let interval
let random = function(){ 
    let num = Math.floor(Math.random()*257)
     return num}

let color = function(){
    return(`rgb(${random()},${random()},${random()})`)
}
let change = function(){
    document.body.style.backgroundColor = color()
}
start.addEventListener("click",()=>{
    interval = setInterval(change,1000)
    start.disabled = true
})
stop.addEventListener("click",()=>{
    clearInterval(interval)
    interval = null
    start.disabled = false
 })