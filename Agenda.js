class Pagamento{
    Pagar(){
        console.log("Pagar")
    }
}
class MarcarAgendamento{
    Marcar(){
        console.log("Agendado")
    }
}
class ChecarVaga{
    Checar(){
        console.log("checando vaga")
    }
}

class Agenda{
    constructor(nomePaciente, operacao, data, horario){
        this.nomePaciente = nomePaciente,
        this.operacao = operacao,
        this.data = data,
        this.horario = horario,
        this.pagamento = new Pagamento(),
        this.marcarAgendamento = new MarcarAgendamento(),
        this.checarVaga = new ChecarVaga()
    }
    Agendar(){
        this.checarVaga.Checar()
        this.marcarAgendamento.Marcar()
        console.log("Finalizado")
    }
}