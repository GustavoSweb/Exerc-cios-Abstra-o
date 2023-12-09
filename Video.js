class Video{
    constructor(title, description, likes, duration){
        this.title = "",
        this.description = "",
        this.likes = "",
        this.duration = ""
    }

    Play(){
        console.log("Rodando...")
    }

    Stop(){
        console.log("Video pausado")
    }

    Skip(){
        console.log("Pulando...")
    }

    Returning(){
        console.log("Retornando...")
    }

}