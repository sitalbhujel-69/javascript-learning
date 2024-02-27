const form = document.querySelector("form")

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let weight = document.querySelector("#weight").value 
    let height = document.querySelector("#height").value / 100
    let result = (weight/(height*height)).toFixed(2)
    if((height==='' || height<0 || isNaN(height)) || (weight===''|| weight<0 ||isNaN(weight))){
        alert("please enter valid height and weight")
    }
    else{
        let output = document.createTextNode = result
        document.querySelector("span").append(output)
    }
})