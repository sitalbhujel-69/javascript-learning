const array = [1,2,3,4,5,6,7,8,9]
console.log(array.filter((e)=> e%2==0))
console.log(array.filter((e)=>{
    return e>7
}
))

// filter returns value but foreach doesnt 

const array2 = [1,2,3,4,5,6,7,8,9,10]
console.log(array2.map((num)=> num*2))

const newnums = array2.map((e)=> e*2)
      .map((e)=>e+1)
      .filter((e)=>e>10);

console.log(newnums)

//reduce
const sum = array.reduce((acc,e)=>{
    return acc+e
},0)
console.log(sum)