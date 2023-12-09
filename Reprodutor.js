class Reprodutor {
  constructor(video, duracao, nome, formato, legenda) {
    this.video = video,
      this.duracao = duracao,
      this.nome = nome,
      this.formato = formato,
      this.legenda = legenda
  }
  Iniciar() {
    console.log("Rodando...");
  }

  Pausar() {
    console.log("Video pausado");
  }

  Pular() {
    console.log("Pulando...");
  }

  Voltar() {
    console.log("Retornando...");
  }
  TirarLegenda() {
    console.log("Removido a legenda");
  }
  AdicionarLedenda() {
    console.log("Escolha a legenda");
  }
}
