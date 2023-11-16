class RefeicaoModel {
    constructor(refeicao) {
      this.id = refeicao.id;
      this.titulo = refeicao.titulo;
      this.tipo = refeicao.tipo;
      this.efetuada = refeicao.efetuada;
      this.horario = refeicao.horario;
      this.id_usuario = refeicao.id_usuario;
      this.id_receita = refeicao.id_receita;
    }
  }
  
module.exports = RefeicaoModel;