class Encomenda{
    constructor(nomeRecebidor, peso, cidadeDeEnvio, cidadeDeRecebimento){
        this.nomeRecebidor = nomeRecebidor,    
        this.peso = peso,
        this.cidadeDeEnvio = cidadeDeEnvio,
        this.cidadeDeRecebimento = cidadeDeRecebimento 
    }

    calcularDistancia(){
        console.log("Distancia calculada")
    }

    calcularFrete(){
        console.log("calcular frete")
    }



}