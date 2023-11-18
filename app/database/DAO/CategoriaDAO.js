const conection = require("../dbConection.js");

const CategoriaDao = {
  
async selectCategorias() {
    return conection.openDB().then((db) => {
      return db.all("SELECT * FROM categorias").then((res) => res);
    });
  },
};

module.exports = CategoriaDao;
