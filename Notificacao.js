class Notificacao{
    constructor(titulo, descricao, destinatario, tipo, dataEnvio){
        this.titulo = titulo, 
        this.descricao = descricao, 
        this.destinatario = destinatario, 
        this.tipo = tipo
        this.status = false
    }

    ChecarStatus(){
        this.status = true
    }
    Informacoes(){
        console.log("Titulo: ... || Descr...")
    }
    
}