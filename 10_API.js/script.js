const xhr = new XMLHttpRequest();
const url = "https://api.github.com/users/sitalbhujel-69"
xhr.open('GET',url)
xhr.onreadystatechange = function (){
    console.log(xhr.readyState)
    if(xhr.readyState=== 4){
        let data = JSON.parse(this.responseText)
        console.log(typeof data)       
        console.log(data.followers)
    }
}
xhr.send()