//rest operator
function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(200,400,500)) //output = [ 200, 400, 500 ]

const user = {
    username:"sital",
    price:299
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
handleObject({
    username:"someone",
    price: 499
})

const array = [1,2,3,4,5]
function getsecond(newarr){
    return newarr[1]
}

console.log(getsecond(array))