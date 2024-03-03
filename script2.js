async function getall(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data =  await response.json()
        console.log(data)
    } catch (error) {
        console.log("E:",error)
    }
}

// getall()
fetch("https://api.github.com/users/sitalbhujel-69")
.then((response)=>{
    return response.json()
})
.then((e)=>{
    console.log(e)
})
.catch((error)=>{
    console.log(error)
})