class CursoUdemy{
    constructor(aulas, nome, descricao, avaliacao, professores, alunos, dataDeCriacao, dataDeAtualizacao, recursos, horas, artigos){
        this.aulas = aulas, 
        this.nome = nome, 
        this.descricao = descricao,
        this.avaliacao = avaliacao, 
        this.professores = professores, 
        this.alunos = alunos,
        this.dataDeCriacao = dataDeCriacao, 
        this.dataDeAtualizacao = dataDeAtualizacao, 
        this.recursos = recursos, 
        this.horas = horas,  
        this.artigos = artigos
    }
    Avaliar(){
        console.log("Avaliando...")
    }
    AdicionarAula(){
        console.log("Adicionada")
    }
    RemoverAula(){
        console.log("Removida")
    }
    Comprar(){
        console.log("Comprando...")
    }

}