let box = document.querySelectorAll(".box")
box.forEach((e)=>{
    e.addEventListener("click",(x)=>{
        console.log(x)
    })
})

/* needs to learn about
  type,timestamp,defaultprevented
  target, toElement, srcElement , currentTarget
  clientX,clientY,screenX,screenY
  altkey,ctrlkey,shiftkey,keycode */


document.querySelector(".bigbox").addEventListener("click",(e)=>{
    console.log("bigbox was clicked")
    
},true)
document.querySelector(".smallbox").addEventListener("click",(e)=>{
    console.log("small box was clicked")
    e.stopPropagation() //stops bubbling
},true)

document.querySelector("#a").addEventListener("click",function(e){
    console.log("linked was clicked")
    e.preventDefault();
},false)
document.querySelector(".bigbox").addEventListener("click",(e)=>{
   console.log(e.target)
   let remove = e.target.parentNode
   remove.remove()
    
},true)