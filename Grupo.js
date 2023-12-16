class Grupo{
    constructor(nome, foto, membros, admins, descricao, config){
        this.nome = nome, 
        this.foto = foto, 
        this.membros = membros, 
        this.admins = admins, 
        this.descricao = descricao, 
        this.config = config
    }
    PromoverAdmin(){
        console.log("Promovido")
    }
    TirarAdmin(){
        console.log("Removido!")
    }
    Expulsar(){
        console.log("Expulso")
    }

}

class Canal extends Grupo{
    constructor(nome, foto, membros, admins, descricao, config, teste){
        super(nome, foto, membros, admins, descricao, config)
        this.teste = teste
    }
    Admin(){
        console.log("Herança")
        super.PromoverAdmin()
        
    }
}
