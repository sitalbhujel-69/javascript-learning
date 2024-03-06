function setuser(username){
    this.username = username
    console.log("hello")
}
function createuser(username,email,password){
    setuser.call(this,username)
    this.email = email
    this.password = password

}

const chai= new createuser("sital","sital@mail.com","12345678")
console.log(chai)