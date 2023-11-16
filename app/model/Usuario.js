class UsuarioModel {
    constructor(usuario) {
      this.id = usuario.id;
      this.nome = usuario.nome;
      this.sobrenome = usuario.sobrenome;
      this.nome_usuario = usuario.nome_usuario;
      this.senha = usuario.senha;
      this.email = usuario.email;
    }
  }
  
  module.exports = UsuarioModel;