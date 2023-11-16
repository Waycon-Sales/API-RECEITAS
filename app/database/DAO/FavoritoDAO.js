const conection = require("dbConection.js");

const FavoritoDao = {
  
    async selectFavoritos(favorito) {
        return conection.openDB().then((db) => {
            return db.all("SELECT * FROM favoritos WHERE id_usuario = ?", [favorito.id_usuario]).then((res) => res);
        });
    },
    
    async deleteFavorito(favorito) {
        return conection.openDB().then((db) => {
            return db.run("DELETE FROM favoritos WHERE id_usuario = ? AND id_receita = ? ", [ favorito.id_usuario, favorito.id_receita]);
        });
    },

    async insertFavorito(favorito) {
        return conection.openDB().then((db) => {
            return db.run("INSERT INTO favoritos (id_usuario, id_receita) VALUES (?, ?) ", [ favorito.id_usuario, favorito.id_receita]);
        });
    },

};

module.exports = FavoritoDao;
