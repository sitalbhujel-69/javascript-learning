let button = document.querySelector("button")
console.log(button)
let input = document.querySelector("#number")
console.log(input)
let msg = document.querySelector(".msg")
let rand = function(){
    return Math.ceil(Math.random()*9)
}
let num = rand()
let score = document.querySelector("span")
let i = 0
let again = document.querySelector(".again")
console.log(num)
button.addEventListener('click',()=>{
   let input2 = parseInt(input.value)
   console.log(input2)
   if(input2<0 || input2=='' || input2>10 || isNaN(input2)){
       msg.innerHTML = "Please enter a valid number"
    }
    else{
        if(input2==num){
        msg.innerHTML = "Congratulation. you guessed it correct"
        i++;
        score.innerHTML = ` ${i}`
        button.disabled = true
    }
    else{
        msg.innerHTML = " please try again"
        button.disabled = true
    }
   }
})
again.addEventListener('click',()=>{
    input.value = ''
    button.disabled = false
    msg.innerHTML = " "
    num = rand()
    console.log(num)
})