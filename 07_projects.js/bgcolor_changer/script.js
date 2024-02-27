const color = document.body.querySelectorAll(".color")
const body = document.querySelector("body")
color.forEach((box)=>{
    box.addEventListener("click",(e)=>{
       body.style.backgroundColor = e.target.id
    })
})