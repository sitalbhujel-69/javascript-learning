// for Loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element>=5){
        console.log(element)
    }
    console.log(element)
    
}

for(let i = 1; i<=10; i++){
    console.log(`table of ${i}`)
    for(let j = 1; j<=10; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}

// break and continue

for (let i  = 0; i  <= 10; i ++) {
    if(i==5){
        console.log(" 5 is detected ")
        continue;
    }
    console.log(i)
    
}