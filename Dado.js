class Dado{
    constructor(faces){
        this.faces = faces
    }
    Rolar(){
        console.log("Caiu, o numero: "+Math.floor((this.faces+1)*Math.random()))
    }
}

var seis = new Dado(6)

seis.Rolar()