class Mensagem{
    constructor(menssagem, emissor, recebidor, dataEnvio){
        this.menssagem = menssagem, 
        this.emissor = emissor, 
        this.recebidor = recebidor, 
        this.dataEnvio = dataEnvio, 
        this.status = false
    }
    checarStatus(){
        this.status = true
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
    static Compartilhar(){
        console.log("Compartilhado")
    }

}