const conection = require("../dbConection.js");

const RefeicaoDao = {
  
    async selectTodasRefeicoesUsuario(refeicao) {
        return conection.openDB().then((db) => {
            return db.all("SELECT * FROM refeicao_planejada WHERE id_usuario = ?", [refeicao.id_usuario]).then((res) => res);
        });
    },
    
    async deleteRefeicao(refeicao) {
        return conection.openDB().then((db) => {
            return db.run("DELETE FROM refeicao_planejada WHERE id = ?", [ refeicao.id]);
        });
    },
    
    async deleteRefeicaoUsuario(refeicao_id_usuario) {
        return conection.openDB().then((db) => {
            return db.run("DELETE FROM refeicao_planejada WHERE id_usuario = ?", [ refeicao_id_usuario]);
        });
    },

    async insertRefeicao(refeicao) {
        console.log(refeicao.titulo)
        return conection.openDB().then((db) => {
            return db.run("INSERT INTO refeicao_planejada (titulo, horario, tipo, efetuada, id_usuario, id_receita) VALUES (?, ?, ?, ?, ?, ?) ", [refeicao.titulo,refeicao.horario,refeicao.tipo ,refeicao.efetuada,refeicao.id_usuario,refeicao.id_receita]);
        });
    },

    async updateRefeicao(refeicao) {
        return conection.openDB().then((db) => {
            return db.run("UPDATE refeicao_planejada SET titulo = ?, horario = ?, tipo = ?, efetuada = ?, id_usuario = ?, id_receita = ? WHERE id = ?", [refeicao.titulo,refeicao.horario,refeicao.tipo ,refeicao.efetuada,refeicao.id_usuario,refeicao.id_receita, refeicao.id]);
        });
    },

};

module.exports = RefeicaoDao;
