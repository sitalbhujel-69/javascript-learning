function sum(a,b){
    // let result = a+b;
    // return result
    return a+b;
    console.log("hello") //Note: statement are not executed after return syntax
}
let reslt = sum(44,66)
console.log("result:",reslt);

function loginuser(user){
    if(user===undefined){
        console.log("please enter username")
        return
    }
    return `${user} is logged in`
}

let user = loginuser("sital")
console.log(user) //output: sital is logged in
let user2 = loginuser()
console.log(user2)// output = please enter username

