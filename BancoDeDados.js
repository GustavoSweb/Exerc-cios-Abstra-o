class BancoDeDados{
    constructor(nome, senha, usuario, host, tipo){
        this.nome = nome,
        this.senha = senha,
        this.usuario = usuario,
        this.host = host,
        this.tipo = tipo
    }

    Conectar(){
        console.log("Conectando...")
    }

    EnviarComandos(){
        console.log("Comandos enviados")
    }

}