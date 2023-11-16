class ReceitaModel {
    constructor(receita) {
      this.id = receita.id;
      this.titulo = receita.titulo;
      this.link_imagem = receita.link_imagem;
      this.ingredientes = receita.ingredientes;
      this.instrucoes = receita.instrucoes;
      this.descricao = receita.descricao;
      this.tempo_preparo = receita.tempo_preparo;
      this.dificuldade = receita.dificuldade;
      this.porcoes = receita.porcoes;
      this.id_usuario = receita.id_usuario;
      this.id_categoria = receita.id_categoria;
    }
  }
  
  module.exports = ReceitaModel;