// Immediately invoked function Expression (IIFE)
(function hello (){
    // named iife
    console.log(`Hello pretty user`)
})();

((user)=>{
    //unnamed iife
    //parameter iife
    console.log(`Hello ${user}`)
})("Sital")