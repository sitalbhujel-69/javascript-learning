//Object literal
const user = {
    username:"sital",
    loginCount: 9,
    loggedin: true,
    getData: function(){
        console.log(user)
    }
}
console.log(user.getData())
console.log(this)

//

function user2(username,logincount,isloggedin) {
    this.username = username
    this.logincount = logincount
    this.isloggedin = isloggedin
    
}

const me = new user2("sital69",9,true)
const me2 =  new user2("diya",6,false)
console.log(me.constructor)
// console.log(me2)