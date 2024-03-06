class User {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`Username: ${this.username}`)
    }
    static createId(){
        return `123`
    }
}

const user = new User("sital")
console.log(user.createId())

class Teacher extends User{
    constructor(username,age){
        super(username)
        this.age= age
    }
}

let you = Teacher("latis",20)
console.log(you.createId())