class User{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,age){
        super(username)
        this.email = email
        this.age = age
    }
    addcourse(){
        console.log(`javascript only rs 5999 by ${this.username}`)
    }
}
const me = new Teacher("sital","mail",20)
me.logme()
const you = new User("Latis")
you.logme()