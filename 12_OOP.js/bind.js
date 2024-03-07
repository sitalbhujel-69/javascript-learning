class react{
    constructor(){
        this.name = "sital"
        this.server = "https://localhost:300"
        //requirement

        document.querySelector("button").addEventListener("click",this.clicked.bind(this))
    }
    clicked(){
        console.log("button clicked")
        console.log(this.name,this.server)
    }
}

let a = new react()