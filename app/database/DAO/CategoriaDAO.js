const conection = require("../dbConection.js");

const CategoriaDao = {
  
  async selectCategorias() {
    return conection.openDB().then((db) => {
      return db.all("SELECT * FROM categorias").then((res) => res);
    });
  },

  async insertCategorias() {
    return conection.openDB().then((db) => {
        db.run('INSERT INTO categorias(categoria, descricao) VALUES ("Prato Principal", "Refeição principal que geralmente inclui uma porção significativa de proteínas, carboidratos e vegetais.")');
        db.run('INSERT INTO categorias(categoria, descricao) VALUES ("Lanche", "Alimento consumido entre as refeições principais, muitas vezes menor que uma refeição completa.")');
        db.run('INSERT INTO categorias(categoria, descricao) VALUES ("Aperitivo", "Pequenos pratos ou alimentos servidos antes da refeição principal para estimular o apetite.")');
        db.run('INSERT INTO categorias(categoria, descricao) VALUES ("Jantar", "Refeição consumida no final do dia, geralmente mais leve que o almoço.")');
        db.run('INSERT INTO categorias(categoria, descricao) VALUES ("Bebidas", "Inclui uma variedade de líquidos, desde água até sucos, refrigerantes e bebidas alcoólicas.")');
        db.run('INSERT INTO categorias(categoria, descricao) VALUES ("Sobremesas", "Doces servidos após a refeição principal para satisfazer o paladar doce.")');
        db.run('INSERT INTO categorias(categoria, descricao) VALUES ("Café da manhã", "Refeição que geralmente inicia o dia, composta por alimentos leves e energéticos.")');
        db.run('INSERT INTO categorias(categoria, descricao) VALUES ("Pré Treino", "Refeição ou lanche consumido antes da prática de exercícios físicos.")');
        db.run('INSERT INTO categorias(categoria, descricao) VALUES ("Pós Treino", "Refeição ou lanche consumido após a prática de exercícios físicos para auxiliar na recuperação muscular.")');
        db.run('INSERT INTO categorias(categoria, descricao) VALUES ("Salada", "Mistura de vegetais crus ou cozidos, muitas vezes servida como acompanhamento")');
        db.run('INSERT INTO categorias(categoria, descricao) VALUES ("Vegetariano", "Refeições que excluem carne, mas podem incluir outros produtos de origem animal, como laticínios e ovos")');
        db.run('INSERT INTO categorias(categoria, descricao) VALUES ("Vegano", "Refeições que excluem todos os produtos de origem animal, incluindo carne, laticínios e ovos.")');
        db.run('INSERT INTO categorias(categoria, descricao) VALUES ("Outros", "Categoria aberta para incluir alimentos que não se enquadram nas categorias anteriores.")');
        db.close();
    });
  },

};



module.exports = CategoriaDao;
