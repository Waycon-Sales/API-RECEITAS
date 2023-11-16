const conection = require("dbConection.js");

const UsuarioDao = {
    async insertUsuario(usuario) {
      await conection.openDB().then((db) => {
        db.run(
          "INSERT INTO usuario (nome, sobrenome, nome_usuario, email, senha) VALUES (?, ?, ?, ?, ?)",
          [usuario.nome, usuario.sobrenome, usuario.nome_usuario, usuario.email, usuario.senha]
        );
        db.close();
      });
    },
    async selectUsuarios() {
      return conection.openDB().then((db) => {
        return db.all("SELECT * FROM usuario").then((res) => res);
      });
    },

    async selectUsuarios(usuario) {
        return conection.openDB().then((db) => {
          return db.all("SELECT * FROM usuario WHERE nome_usuario LIKE ?", [`%${usuario.nome_usuario}%`]).then((res) => res);
        });
    },

    async updateUsuario(usuario) {
      await conection.openDB().then((db) => {
        return db.run(
          "UPDATE usuario SET nome = ?, sobrenome = ?, nome_usuario = ?, email = ? WHERE id = ?",
          [usuario.nome, usuario.sobrenome, usuario.nome_usuario, usuario.email, usuario.id]
        );
      });
    },

    async deleteUsuario(usuario) {
      return conection.openDB().then((db) => {
        return db.run("DELETE FROM usuario WHERE id = ?", [usuario.id]);
      });
    },
  };
  
  module.exports = UsuarioDao;