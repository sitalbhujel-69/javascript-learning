let name = new String('sital');
console.log(name);

//properties of string 
//string:length

console.log(name.length);

// ----------Methods of string----------

// string:concat

console.log(name.concat(" ","Bhujel"));


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

//string: 