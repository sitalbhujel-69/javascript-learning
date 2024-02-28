let box =document.querySelector(".box")
setInterval(()=>{
    let date = new Date().toLocaleTimeString()
    box.innerHTML = `<h1>${date}</h1>`
},1000)