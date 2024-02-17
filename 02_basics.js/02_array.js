let fruits  = ["apple","mango","papaya","coocnut","banana"]
let flowers = ["marigold","sunflower","poppy","lily","lotus"]

//spread operator

let all = [...fruits,...flowers]
console.log(all)  // output = ['apple','mango','papaya','coocnut','banana','marigold','sunflower', 'poppy','lily','lotus']

//array: flat
 let array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
 let new_array = array.flat(Infinity) // spread out all arrays
 console.log(new_array) // output = [1,2,3,4,5,6,7,8,9,10,11]

 //array: isArray and from and of

 console.log(Array.isArray("sital")) //output = false
 console.log(Array.from("sital")) //output = [ 's', 'i', 't', 'a', 'l' ]

 let name = "sital"
 let age = 18
 let isStudying = true

 console.log(Array.of(name,age,isStudying)) // output = [ 'sital', 18, true ]
 