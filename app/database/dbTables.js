const conection = require("./dbConection.js");

const DBTables = {
async createTables(){    
   return conection.openDB().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS usuario(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL, sobrenome TEXT NULL, nome_usuario TEXT NOT NULL, email TEXT NULL, senha TEXT NOT NULL)');
        db.exec('CREATE TABLE IF NOT EXISTS categorias(id INTEGER PRIMARY KEY AUTOINCREMENT, categoria TEXT NOT NULL, descricao TEXT NOT NULL)');
        db.exec('CREATE TABLE IF NOT EXISTS receitas(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT NOT NULL, link_imagem TEXT, ingredientes TEXT NOT NULL, instrucoes TEXT NOT NULL, descricao TEXT, tempo_preparo TEXT NOT NULL, dificuldade TEXT, porcoes INTEGER NOT NULL, id_usuario INTEGER NOT NULL, id_categoria INTEGER NOT NULL,  FOREIGN KEY (id_usuario) REFERENCES usuario(id), FOREIGN KEY (id_categoria) REFERENCES categoria(id))');
        db.exec('CREATE TABLE IF NOT EXISTS favoritos(id INTEGER  PRIMARY KEY, id_usuario INTEGER NOT NULL, id_receita INTEGER NOT NULL, FOREIGN KEY (id_usuario) REFERENCES usuario(id), FOREIGN KEY (id_receita) REFERENCES receitas(id) )');
        db.exec('CREATE TABLE IF NOT EXISTS refeicao_planejada(id INTEGER PRIMARY KEY AUTOINCREMENT, horario TEXT NOT NULL, tipo TEXT NOT NULL, titulo TEXT, efetuada TEXT NOT NULL, id_usuario INTEGER NOT NULL, id_receita INTEGER, FOREIGN KEY (id_usuario) REFERENCES usuario(id), FOREIGN KEY (id_receita) REFERENCES receitas(id))');
        db.close();
    });
},

async dropTables(){
    return conection.openDB().then(db=>{
        db.exec('DROP TABLE IF EXISTS refeicao_planejada');
        db.exec('DROP TABLE IF EXISTS usuario');
        db.exec('DROP TABLE IF EXISTS receitas');
        db.exec('DROP TABLE IF EXISTS favoritos');
        db.exec('DROP TABLE IF EXISTS categorias');
        db.close();
    });
}
}

module.exports = DBTables;