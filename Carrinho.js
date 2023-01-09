class Carrinho{
  constructor(){
    this.names = [],
    this.images = [],
    this.price = 0,
    this.freight = 0,
    this.amount = 0
  }
  checkout(){
    console.log("Compra finalizada")
  }
  discard(){
    console.log("Item retirado do carrinho")
  }
  
}