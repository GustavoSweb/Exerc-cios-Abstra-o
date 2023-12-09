class Mensagem{
    constructor(messagem, emissor, recebidor, dataEnvio, status){
        this.messagem = messagem, 
        this.emissor = emissor, 
        this.recebidor = recebidor, 
        this.dataEnvio = dataEnvio, 
        this.status = status
    }

    Editar(){
        console.log("Editado")
    }
    ApagarParaMim(){
        console.log("Apagado, somente para você")
    }
    Deletar(){
        console.log("Deletado para todos")
    }
    Compartilhar(){
        console.log("Compartilhado")
    }

}