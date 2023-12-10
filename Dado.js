class Dado{
    constructor(faces){
        this.faces = faces
    }
    Rolar(){
        console.log("Caiu, o numero: "+Math.floor(this.faces*Math.random()+1))
    }
}

var seis = new Dado(6)

seis.Rolar()