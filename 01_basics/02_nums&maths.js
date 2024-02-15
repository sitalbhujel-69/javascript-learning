const num1 = 500;
const num2 = new Number(999)
console.log(num1)
console.log(num2)

// --------------------METHODS OF NUMBER HANDLING IN JAVASCRIPT-----------------

//Number:toString
console.log(num2.toString())   // expected output = '999'

//Number:tofixed
console.log(num2.toFixed(3))  //expected output = 999.000

//Number:to precision
const num3 =  89.5633
console.log(num3.toPrecision(3))  // expected output = 89.6
console.log(num3.toPrecision(2))  //expected output  = 90

//Number: toLocalestring

const num4 = 100000000
console.log(num4.toLocaleString())  //expected output = 100,000,000
console.log(num4.toLocaleString('en-IN'))  //expected output = 10,00,00,000

// ---------------------MATHs---------------------------------------

console.log(Math)
 // methods of math
 //math.: abs

 console.log(Math.abs(-66)) // expected value = 66  //returns absoulte value of a number

 //math : round
 console.log(Math.round(0.99))  // expected output = 1 //returns round up value 

 //math : ceil 
 console.log(Math.ceil(1.2)); // expected output = 2 // returns the upper roundup value

 // math: floor
 console.log(Math.floor(99.99)) // expected output = 99 // returns the lower roundup value

 //math : min  and max
 console.log(Math.min(5,6,4,7,9)) // expected output = 4 // returns the minimum value among given numbers
 console.log(Math.max(4,5,6,9,7,8)) // expected output = 9 //returns the maixmum value among given numbers

 //math : random
 console.log(Math.random()) // returns a random number between 0 to 1
 console.log(1+(Math.random()*9)) 
 // returns a random number between 1 to 10. general formula = lower range+ Math.random()*(upperrange - lower)

