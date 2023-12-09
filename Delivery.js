class Delivery{
    constructor(nome, endereco, produto, quantidade){
        this.nome = nome,
        this.endereco = endereco,
        this.produto = produto,
        this.quantidade = quantidade
    }
    cancelarPedido(){
        console.log("Pedido cancelado")
    }
    mudarPedido(){
        console.log("Mudar pedido")
    }
}