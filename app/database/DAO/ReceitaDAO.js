const conection = require("../dbConection.js");

const ReceitaDao = {
  
    async selectTodasReceitasUsuario(receita) {
        return conection.openDB().then((db) => {
            return db.all("SELECT * FROM receitas WHERE id_usuario = ?", [receita.id_usuario]).then((res) => res);
        });
    },

    async selectReceitaId(receita) {
        
        return conection.openDB().then((db) => {
            return db.all("SELECT * FROM receitas WHERE id = ?", [receita.id]).then((res) => res);
        });
    },

    async selectTodasReceitasTitulo(receita) {
        return conection.openDB().then((db) => {
            return db.all("SELECT * FROM receitas WHERE titulo LIKE ?", [`%${receita.titulo}%`]).then((res) => res);
        });
    },

    async selectTodasReceitasTituloUsuario(receita) {
        return conection.openDB().then((db) => {
            return db.all("SELECT * FROM receitas WHERE UPPER(titulo) LIKE (?) AND id_usuario = ?", [`%${receita.titulo}%`, receita.id_usuario]).then((res) => res);
        });
    },

    async selectTodasReceitasCategoria(receita) {
        return conection.openDB().then((db) => {
            return db.all("SELECT * FROM receitas WHERE id_categoria = ?", [receita.id_categoria]).then((res) => res);
        });
    },
    
    async deleteReceita(receita) {
        return conection.openDB().then((db) => {
            return db.run("DELETE FROM receitas WHERE id = ?", [ receita.id]);
        });
    },

    async deleteReceitaUsuario(receita_id_usuario) {
        return conection.openDB().then((db) => {
            return db.run("DELETE FROM receitas WHERE id_usuario = ?", [receita_id_usuario]);
        });
    },

    async insertReceita(receita) {
        return conection.openDB().then((db) => {
            return db.run("INSERT INTO receitas (titulo, link_imagem, ingredientes, instrucoes, descricao, tempo_preparo, dificuldade, porcoes, id_usuario, id_categoria) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ", [receita.titulo,receita.link_imagem,receita.ingredientes ,receita.instrucoes,receita.descricao,receita.tempo_preparo,receita.dificuldade,receita.porcoes,receita.id_usuario,receita.id_categoria]);
        });
    },

    async updateReceita(receita) {
        return conection.openDB().then((db) => {
            return db.run("UPDATE receitas SET titulo = ?, link_imagem = ?, ingredientes = ?, instrucoes = ?, descricao = ?, tempo_preparo = ?, dificuldade = ?, porcoes = ?, id_usuario = ?, id_categoria = ? WHERE id = ?", [receita.titulo,receita.link_imagem,receita.ingredientes ,receita.instrucoes,receita.descricao,receita.tempo_preparo,receita.dificuldade,receita.porcoes,receita.id_usuario,receita.id_categoria, receita.id]);
        });
    },

};

module.exports = ReceitaDao;
