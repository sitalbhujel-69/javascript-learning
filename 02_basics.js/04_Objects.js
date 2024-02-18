const user1 = new Object()

user1.id = "123abc"
user1.name = "fuchka"
user1.isLoggedIn = false

// console.log(user1)

const user2 = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"sital",
            lastname:  "Bhujel"
        }
    }
}

// console.log(user2.fullname.userfullname.firstname)

// ------------------Methods-----------------
//object:assign

let obj1 = { 1:"a",2:"b"}
let obj2 = { 3:"c",4:"d"}
let obj3 = Object.assign({},obj1,obj2)
console.log(obj3) // output = { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//spread operator
let obj4  = {...obj1,...obj2}
console.log(obj4) // output = { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//object:keys and values and entries
console.log(Object.keys(user1)) //output = [ 'id', 'name', 'isLoggedIn' ] // returns an array of keys of obj
console.log(Object.values(user1)) //output = [ '123abc', 'fuchka', false ] // returns an array of values of obj
console.log(Object.entries(user1)) //output = [ [ 'id', '123abc' ], [ 'name', 'fuchka' ], [ 'isLoggedIn', false ] ] // returns an array of key value pairs inside an array


//objects: hasOwn
console.log(Object.hasOwn(user1,'name')) //output= true // returns boolean result if the object have given properties or not
