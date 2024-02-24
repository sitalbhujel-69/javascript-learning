// For of

const array = [1,2,3,4,5]

for (const i of array) {
    console.log(i)
}

// map
const map = new Map()
map.set('NP','Nepal')
map.set('NP','Nepal')
map.set('IN','India')
map.set('JP','Japan')
map.set('JP','Japan')
map.set('US','United States of America')

console.log(map);

for (const [key,value] of map) {
    console.log(key,":",value)
}

// for..of loop cannot be used in Object