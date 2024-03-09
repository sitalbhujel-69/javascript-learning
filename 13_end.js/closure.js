function one(){
    let name = 'sital'
    function two(){
        console.log(name)
    }
    two()
}
one()

// function a(){
//     let usr = "sital"
//     function b(){
//         let bi = 1234;
//         console.log(usr)
//     }
//     function b2(){
//         console.log(bi)
//     }
//     b()

// }
// a()
// console.log(usr)


//closure
function some(){
    const name = "someone"
    function any(){
        console.log(name)
    }
    return any
}

const abc = some()
abc()