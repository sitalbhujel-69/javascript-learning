const array = ["apple","banana","coconut","pineapple","papaya","mango"]

array.forEach((e)=>{
    
    console.log(e.concat(1))
})

function print (item){
    console.log(item)
}

array.forEach(print)