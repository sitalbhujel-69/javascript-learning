let myDate = new Date()
console.log(myDate);
let date = new Date(2024,0,28) // expected output  = Sun Jan 28 2024
console.log(date.toDateString())

let timestamp = Date.now()
console.log(Math.floor(timestamp/1000))
console.log(date.getTime())

//--------------methods in Dates----------------
//date: getMonth getHour getseconds etc
console.log(myDate.getDay())
console.log(myDate.getFullYear())
console.log(myDate.getHours())
console.log(myDate.getMinutes())
console.log(myDate.getTimezoneOffset())


// date: tostring
console.log(myDate.toString()); // expected output = Fri Feb 16 2024 13:15:43 GMT+0545 (Nepal Time)

//date: toLocalestring
console.log(myDate.toLocaleString()) //expected output = 2/16/2024, 1:19:51 PM
console.log(myDate.toLocaleString('default',{
    month: "long",
    day: "2-digit",
    year: "numeric"
})) // expected output = February 16 2024
// date: toDatestring
console.log(myDate.toDateString())  // expected output = Fri Feb 16 2024

// date : toJSON
console.log(myDate.toJSON())  //expected output = 2024-02-16T07:40:51.633Z

