const ReceitaDAO = require("../database/DAO/ReceitaDAO.js");
const FavoritoDAO = require("../database/DAO/FavoritoDAO.js");
const ReceitaModel = require("../model/Receita.js"); 
const Utils = require("../utils/Utils.js");


const ReceitaControler = {
  async selectReceitasId(req, res) {
    try {
        if(req.query != [] && req.query != undefined ){
            let receitaModel = new ReceitaModel(req.query)
            if(Utils.naoNulo(receitaModel.id)){
                const receita = await ReceitaDAO.selectReceitaId(receitaModel);
                console.log(receita);
                res.status(200).json({
                    'type': "S",
                    'receitas': receita,
                    'message': 'Sucesso ao carregar Receita'
                });       
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'receitas': [],
                    'message': "Campo está vazio" 
                });  
            }
        }else{
            res.status(400).json({ 
                'type': "E",
                'receitas': [],
                'message': "Corpo da requisição está vazio" 
            }); 
        }
    } catch (error) {
        res.status(500).json({ 
        'type': "E",
        'receitas': [],
        'message': "Erro ao recuperar Receitas" });
    }
  },    

  async selectReceitasUsuario(req, res) {
    try {
        if(req.query != [] && req.query != undefined ){
            let receitaModel = new ReceitaModel(req.query)
            if(Utils.naoNulo(receitaModel.id_usuario)){
                const receitasUsuario = await ReceitaDAO.selectTodasReceitasUsuario(receitaModel);
                console.log(receitasUsuario);
                res.status(200).json({
                    'type': "S",
                    'receitas': receitasUsuario,
                    'message': 'Sucesso ao carregar Receitas'
                });       
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'receitas': [],
                    'message': "Campo está vazio" 
                });  
            }
        }else{
            res.status(400).json({ 
                'type': "E",
                'receitas': [],
                'message': "Corpo da requisição está vazio" 
            }); 
        }
    } catch (error) {
      res.status(500).json({ 
        'type': "E",
        'receitas': [],
        'message': "Erro ao recuperar Receitas" });
    }
  },

  async selectReceitasTitulo(req, res) {
    try {
        if(req.query != [] && req.query != undefined ){
            let receitaModel = new ReceitaModel(req.query)
            if(Utils.naoNulo(receitaModel.titulo)){
                console.log(receitaModel.titulo)
                const receitasTitulo = await ReceitaDAO.selectTodasReceitasTitulo(receitaModel);
                console.log(receitasTitulo);
                res.status(200).json({
                    'type': "S",
                    'receitas': receitasTitulo,
                    'message': 'Sucesso ao carregar Receitas'
                });       
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'receitas': [],
                    'message': "Campo está vazio" 
                });  
            }
        }else{
            res.status(400).json({ 
                'type': "E",
                'receitas': [],
                'message': "Corpo da requisição está vazio" 
            }); 
        }
    } catch (error) {
      res.status(500).json({ 
        'type': "E",
        'receitas': [],
        'message': "Erro ao recuperar Receitas" });
    }
  },  

  async selectReceitasUsuarioTitulo(req, res) {
    try {
        if(req.query != [] && req.query != undefined ){
            let receitaModel = new ReceitaModel(req.query)
            if(Utils.naoNulo(receitaModel.id_usuario) && Utils.naoNulo(receitaModel.titulo) ){
                const receitasUsuarioTitulo = await ReceitaDAO.selectTodasReceitasTituloUsuario(receitaModel);
                console.log(receitasUsuarioTitulo);
                res.status(200).json({
                    'type': "S",
                    'receitas': receitasUsuarioTitulo,
                    'message': 'Sucesso ao carregar Receitas'
                });       
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'receitas': [],
                    'message': "Campo está vazio" 
                });  
            }
        }else{
            res.status(400).json({ 
                'type': "E",
                'receitas': [],
                'message': "Corpo da requisição está vazio" 
            }); 
        }
    } catch (error) {
      res.status(500).json({ 
        'type': "E",
        'receitas': [],
        'message': "Erro ao recuperar Receitas" });
    }
  },
  
  async selectReceitasCategoria(req, res) {
    try {
        if(req.query != [] && req.query != undefined ){
            let receitaModel = new ReceitaModel(req.query)
            if(Utils.naoNulo(receitaModel.id_categoria)){
                const receitasCategoria = await ReceitaDAO.selectTodasReceitasCategoria(receitaModel);
                console.log(receitasCategoria);
                res.status(200).json({
                    'type': "S",
                    'receitas': receitasCategoria,
                    'message': 'Sucesso ao carregar Receitas'
                });       
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'receitas': [],
                    'message': "Campo está vazio" 
                });  
            }
        }else{
            res.status(400).json({ 
                'type': "E",
                'receitas': [],
                'message': "Corpo da requisição está vazio" 
            }); 
        }
    } catch (error) {
      res.status(500).json({ 
        'type': "E",
        'receitas': [],
        'message': "Erro ao recuperar Receitas" });
    }
  },
  
  async insertReceita(req, res) {
    try {
        if(req.body != [] && req.body != undefined ){
            let receitaModel = new ReceitaModel(req.body)
            if(Utils.naoNulo(receitaModel.id_usuario) && Utils.naoNulo(receitaModel.id_categoria) && Utils.naoNulo(receitaModel.porcoes) && Utils.naoNulo(receitaModel.tempo_preparo) && Utils.naoNulo(receitaModel.instrucoes) && Utils.naoNulo(receitaModel.ingredientes) && Utils.naoNulo(receitaModel.titulo)){
                await ReceitaDAO.insertReceita(receitaModel);
                res.status(200).json({
                    'type': "S",
                    'message': 'Sucesso ao inserir Receita'
                });       
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'receitas': [],
                    'message': "Campos obrigatórios estão vazios" 
                });  
            }
        }else{
            res.status(400).json({ 
                'type': "E",
                'receitas': [],
                'message': "Corpo da requisição está vazio" 
            }); 
        }
    } catch (error) {
      res.status(500).json({ 
        'type': "E",
        'receitas': [],
        'message': "Erro ao recuperar Receitas" });
    }
  },

  async updateReceita(req, res) {
    try {
        if(req.body != [] && req.body != undefined ){
            let receitaModel = new ReceitaModel(req.body)
            if(Utils.naoNulo(receitaModel.id) && Utils.naoNulo(receitaModel.id_usuario) && Utils.naoNulo(receitaModel.id_categoria) && Utils.naoNulo(receitaModel.porcoes) && Utils.naoNulo(receitaModel.tempo_preparo) && Utils.naoNulo(receitaModel.instrucoes) && Utils.naoNulo(receitaModel.ingredientes) && Utils.naoNulo(receitaModel.titulo)){
                await ReceitaDAO.updateReceita(receitaModel);
                res.status(200).json({
                    'type': "S",
                    'message': 'Sucesso ao atualizar Receita'
                });       
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'receitas': [],
                    'message': "Campos obrigatórios estão vazios" 
                });  
            }
        }else{
            res.status(400).json({ 
                'type': "E",
                'receitas': [],
                'message': "Corpo da requisição está vazio" 
            }); 
        }
    } catch (error) {
      res.status(500).json({ 
        'type': "E",
        'receitas': [],
        'message': "Erro ao recuperar Receitas" });
    }
  },

  async deleteReceita(req, res) {
    try {
        if(req.body != [] && req.body != undefined ){
            var recs = req.body.receitas;
            if(recs.length != 0 && Utils.naoNulo(recs[0].id_usuario)){
                for(var i = 0; i < recs.length; i++){
                    let rec = new ReceitaModel(recs[i]);
                    await FavoritoDAO.deleteFavoritoPorReceita(rec.id);
                    await ReceitaDAO.deleteReceita(rec);
                }
                var receitas = await ReceitaDAO.selectTodasReceitasUsuario(new ReceitaModel(recs[0]));
                res.status(200).json({ 
                    'type': "S",
                    'receitas': receitas,
                    'message': "Sucesso ao deletar receitas do usuário" 
                });
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'receitas': [],
                    'message': "lista de receitas para deletar está vazia" 
                });  
            }
        }else{
            res.status(400).json({ 
                'type': "E",
                'receitas': [],
                'message': "Corpo da requisição está vazio" 
            }); 
        }
    } catch (error) {
      res.status(500).json({ 
        'type': "E",
        'receitas': [],
        'message': "Erro ao recuperar Receitas" });
    }
  },
  
};

module.exports = ReceitaControler;