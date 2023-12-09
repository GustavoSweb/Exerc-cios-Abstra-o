class Agenda{
    constructor(nomePaciente, operacao, data, horario){
        this.nomePaciente = nomePaciente,
        this.operacao = operacao,
        this.data = data,
        this.horario = horario

    }
    ChecarVaga(){
        console.log("checando vaga")
    }
    Pagamento(){
        console.log("Pagar")
    }
    MarcarAgendamento(){
        console.log("Agendado")
    }

}