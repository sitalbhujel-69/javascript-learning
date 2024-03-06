class User {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encrypt(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("Sital","sutal69","123445")
console.log(chai.changeusername())