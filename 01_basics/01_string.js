let name = new String('sital');
console.log(name);

//properties of string 
//string:length

console.log(name.length); // expected output= 5

// ----------Methods of string----------

// string:concat

console.log(name.concat(" ","Bhujel")); // expected output = sital Bhujel


// string:endswith
let str = 'I am a boy'
console.log(str.endsWith("boy",10))  // expected output = True

//string:includes
console.log(str.includes('boy'))  // expected output= True

// string:match
let regex = /[a-z]/g
console.log(str.match(regex)) // expected output = ['a','m','a','b','o','y']

//string: replace and replaceAll
console.log(str.replace(' ','/')) // expected output = I/am a boy
console.log(str.replaceAll(' ','/')) // expected output = I/am/a/boy

//string: search
console.log(str.search('b'))  // expected output = 7 which is index of 'b'

//string: slice
console.log(str.slice(4))   // expected output = a boy
console.log(str.slice(4,9))  // expected output = a bo

//string: split

console.log(str.split(' ')); //expected output = ["I","am","a","boy"]
console.log(str.split(' ', 3)); // expected output = ["I","am","a"]

//string:substring

console.log(str.substring(4)); //expected output =  a boy
console.log(str.substring(-2,8))// expected output= I am a b          //negative indeces are count as 0 in substring method

//string:trim

let string = "       hello     "
console.log(string.trim())  //expected output = hello // with out extra whitespaces

