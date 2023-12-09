class Video{
    constructor(title, description, likes, duration){
        this.title = title,
        this.description = description,
        this.likes = likes,
        this.duration = duration
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