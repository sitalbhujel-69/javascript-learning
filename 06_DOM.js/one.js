const parent = document.querySelector(".parent");
console.log(parent.children[0].innerText);

for (let i  = 0; i  < parent.children.length; i ++) {
   console.log(parent.children[i].innerText)
    
}

console.log(parent.firstElementChild)
console.log(parent.lastElementChild)

let num = document.querySelector(".num")
console.log(num.parentElement)
console.log(num.nextElementSibling)

console.log(parent.childNodes)