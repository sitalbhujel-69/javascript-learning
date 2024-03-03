let promsie = new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("async task is completed")
        resolve()
    },3000)
})
promsie.then(()=>{
    console.log("fuck you")
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async 2 is completed")
        resolve()
    },4000)
})
.then(function(){
    console.log("resolved 2")
})
let data ={
    username:"sital69",
    email:"abc@example.com"
}
let promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(data)
    }, 1000);
})

promise.then((e)=>{
    console.log(e)
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve(data)
        }
        else{
            reject("Error Something went wrong")
        }
    }, 4000);
})
promise2.then((user)=>{
    console.log(user)
    return user.username
})
.then((e)=>{
    console.log(e)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=> console.log("what do you want more than this"))

let promise3  = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username:"is dead", email:"not found"})
        }else{
            reject("Some thing went wrong")
        }
    }, 5000);
})
async function consumepromise3(){
    try {
        const response = await promise3
        console.log(response)
        
    } catch (error) {
        console.log(error)
    }
}
consumepromise3()
fetch("https://api.github.com/users/sitalbhujel-69")
.then((response)=>{
    return response.json()
})
.then((e)=>{
    console.log(e)
})
.catch((error)=>{
    console.log(error)
})