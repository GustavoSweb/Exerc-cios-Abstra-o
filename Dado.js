class Dado{
    constructor(faces){
        this.faces = faces
    }
    Rolar(){
        console.log("Caiu, o numero: "+Math.floor(Math.floor(this.faces)*Math.random()+1))
    }
}

var seis = new Dado(8.5)

seis.Rolar()