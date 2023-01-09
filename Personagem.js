class Personagem{
  constructor(){
    this.nick = '',
    this.life = 0,
    this.clothes = [],
    this.force = 0,
    this.inventory = []
  }
  toMove(){
    console.log("Voce se moveu")
  }
  atack(){
    console.log("Voce atacou")
  }
  interact(){
    console.log("Você esta interagindo com algo")
  }
  inventory(){
    console.log("Voce abriu o inventário")
  }
}
  