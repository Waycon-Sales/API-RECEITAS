const conection = require("./dbConection.js");

const DBTables = {
async createTables(){    
   return conection.openDB().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS usuario(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL, sobrenome TEXT NULL, nome_usuario TEXT NOT NULL, email TEXT NULL, senha TEXT NOT NULL)');
        db.exec('CREATE TABLE IF NOT EXISTS categorias(id INTEGER PRIMARY KEY AUTOINCREMENT, categoria TEXT NOT NULL, descricao TEXT NOT NULL)');
        db.exec('CREATE TABLE IF NOT EXISTS receitas(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT NOT NULL, link_imagem TEXT, ingredientes TEXT NOT NULL, instrucoes TEXT NOT NULL, descricao TEXT, tempo_preparo TEXT NOT NULL, dificuldade TEXT, porcoes INTEGER NOT NULL, id_usuario INTEGER NOT NULL, id_categoria INTEGER NOT NULL,  FOREIGN KEY (id_usuario) REFERENCES usuario(id), FOREIGN KEY (id_categoria) REFERENCES categoria(id))');
        db.exec('CREATE TABLE IF NOT EXISTS favoritos(id INTEGER  PRIMARY KEY, id_usuario INTEGER NOT NULL, id_receita INTEGER NOT NULL, FOREIGN KEY (id_usuario) REFERENCES usuario(id), FOREIGN KEY (id_receita) REFERENCES receitas(id) )');
        db.exec('CREATE TABLE IF NOT EXISTS refeicao_planejada(id INTEGER PRIMARY KEY AUTOINCREMENT, horario TEXT NOT NULL, tipo TEXT NOT NULL, titulo TEXT, efetuada TEXT NOT NULL, id_usuario INTEGER NOT NULL, id_receita INTEGER, FOREIGN KEY (id_usuario) REFERENCES usuario(id), FOREIGN KEY (id_receita) REFERENCES receitas(id))');
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

async dropTables(){
    return conection.openDB().then(db=>{
        db.exec('DROP TABLE IF EXISTS refeicao_planejada');
        //db.exec('DROP TABLE IF EXISTS usuario');
        db.exec('DROP TABLE IF EXISTS receitas');
        db.exec('DROP TABLE IF EXISTS favoritos');
        db.exec('DROP TABLE IF EXISTS categorias');
        db.close();
    });
}
}

module.exports = DBTables;