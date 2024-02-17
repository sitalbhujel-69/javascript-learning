let animals = ["Dog","Cat","Donkey","Monkey","you"]
const arr = new Array(1,2,true,"sital");
console.log(arr)
console.log(animals);

// --------------------Methods of array---------------------------
//  array:Push
animals.push("me")
console.log(animals)  // output = [ 'Dog', 'Cat', 'Donkey', 'Monkey', 'you', 'me' ]

//array:pop
animals.pop()   // removes the last element of array
console.log(animals)  //output = [ 'Dog', 'Cat', 'Donkey', 'Monkey', 'you' ]

//Array : shift and unshift

animals.shift() // extracts the first element of an array as an output
animals.unshift("mouse") //insert the elements at first place inside array
console.log(animals) // expected output = [ 'mouse', 'Cat', 'Donkey', 'Monkey', 'you' ]

//array: includes,indexof

console.log(animals.includes("Donkey"))  //Output  = true
console.log(animals.indexOf("Donkey"))  //Output = 2
console.log(animals.indexOf("pikachu")) //output = -1 // cause there is no pikachu inside the array

 //array: join 

 let animals2 = animals.join() // joins the elements and returns the array in string 
console.log(animals)
console.log(animals2) // output = mouse,Cat,Donkey,Monkey,you

// Array : slice and splice

let array = [1,2,3,4,5];
console.log("a",array)
let new1 = array.slice(1,4)
console.log(new1) // expected output = [ 2, 3, 4 ]
console.log("b",array)
let new2 = array.splice(1,4)
console.log("c",array) // expected output = c [ 1 ]

array.splice(1,0,"sital")
console.log(array) // expected output = [ 1, 'sital', 2, 3, 4, 5 ]