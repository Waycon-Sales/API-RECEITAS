const RefeicaoDAO = require("../database/DAO/RefeicaoDAO.js");
const ReceitaDAO = require("../database/DAO/ReceitaDAO.js");
const ReceitaModel = require("../model/Receita.js"); 
const RefeicaoModel = require("../model/Refeicao.js"); 
const Utils = require("../utils/Utils.js");

const RefeicaoController = {
  async selectRefeicaoUsuario(req, res) {
    try {
        if(req.query != [] && req.query != undefined ){
            let refeicaoModel = new RefeicaoModel(req.query)
            if(Utils.naoNulo(refeicaoModel.id_usuario)){
                const refeicoesUsuario = await RefeicaoDAO.selectTodasRefeicoesUsuario(refeicaoModel);
                console.log(refeicoesUsuario);
                res.status(200).json({
                    'type': "S",
                    'refeicoes': refeicoesUsuario,
                    'message': 'Sucesso ao carregar refeicao'
                });       
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'refeicoes': [],
                    'message': "Campo está vazio" 
                });  
            }
        }else{
            res.status(400).json({ 
                'type': "E",
                'refeicoes': [],
                'message': "Corpo da requisição está vazio" 
            }); 
        }
    } catch (error) {
      res.status(500).json({ 
        'type': "E",
        'refeicao': [],
        'message': "Erro ao recuperar refeicoes" });
    }
  },

  async insertRefeicao(req, res) {
    try {
        if(req.body != [] && req.body != undefined ){
            let refeicaoModel = new RefeicaoModel(req.body)
            if(Utils.naoNulo(refeicaoModel.id_usuario) && Utils.naoNulo(refeicaoModel.horario) && Utils.naoNulo(refeicaoModel.tipo) && refeicaoModel.efetuada != undefined){
                if(Utils.naoNulo(refeicaoModel.titulo) == false && Utils.naoNulo(refeicaoModel.id_receita)){
                    let receitaModel = new ReceitaModel({"id": refeicaoModel.id_receita});
                    let receitaBD = await ReceitaDAO.selectReceitaId(receitaModel);
                    if(Utils.naoNulo(receitaBD[0].titulo)){
                        refeicaoModel.titulo = receitaBD[0].titulo; 
                    }else{
                        refeicaoModel.titulo = "refeição";  
                    }
                    await RefeicaoDAO.insertRefeicao(refeicaoModel);
                    res.status(200).json({
                        'type': "S",
                        'message': 'Sucesso ao inserir Refeicao'
                    });
                }else if(Utils.naoNulo(refeicaoModel.titulo)){
                    await RefeicaoDAO.insertRefeicao(refeicaoModel);
                    res.status(200).json({
                        'type': "S",
                        'message': 'Sucesso ao inserir Refeicao'
                    });
                }else if(Utils.naoNulo(refeicaoModel.titulo) == false && Utils.naoNulo(refeicaoModel.id_receita) == false){
                    res.status(400).json({ 
                        'type': "E",
                        'refeicoes': [],
                        'message': "Campos de titulo e receita estão vazio estão vazios, preencha um dos dois corretamente" 
                    }); 
                }       
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'refeicoes': [],
                    'message': "Campos obrigatórios estão vazios" 
                });  
            }
        }else{
            res.status(400).json({ 
                'type': "E",
                'refeicoes': [],
                'message': "Corpo da requisição está vazio" 
            }); 
        }
    } catch (error) {
        console.log(error);
      res.status(500).json({ 
        'type': "E",
        'refeicoes': [],
        'message': "Erro ao inserir refeicoes" });
    }
  },

  async updateRefeicao(req, res) {
    try {
        if(req.body != [] && req.body != undefined ){
            let refeicaoModel = new RefeicaoModel(req.body)
            if(Utils.naoNulo(refeicaoModel.id) && Utils.naoNulo(refeicaoModel.id_usuario) && Utils.naoNulo(refeicaoModel.horario) && Utils.naoNulo(refeicaoModel.tipo) && Utils.naoNulo(refeicaoModel.efetuada)){
                if(Utils.naoNulo(refeicaoModel.titulo) == false && Utils.naoNulo(refeicaoModel.id_receita)){
                    let receitaModel = new ReceitaModel({"id": refeicaoModel.id_receita});
                    console.log(receita.id);
                    let receitaBD = await ReceitaDAO.selectReceitaId(receitaModel);
                    receitaModel.titulo = receitaBD.titulo; 
                    console.log( receitaModel.titulo);
                    await RefeicaoDAO.updateRefeicao(refeicaoModel);
                    res.status(200).json({
                        'type': "S",
                        'message': 'Sucesso ao inserir Refeicao'
                    });
                }else if(Utils.naoNulo(refeicaoModel.titulo)){
                    await RefeicaoDAO.updateRefeicao(refeicaoModel);
                    res.status(200).json({
                        'type': "S",
                        'message': 'Sucesso ao inserir Refeicao'
                    });
                }else{
                    res.status(400).json({ 
                        'type': "E",
                        'refeicoes': [],
                        'message': "Campos de titulo e refeicao está vazio estão vazios, preencha um dos dois corretamente" 
                    }); 
                }     
               
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'refeicoes': [],
                    'message': "Campos obrigatórios estão vazios" 
                });  
            }
        }else{
            res.status(400).json({ 
                'type': "E",
                'refeicoes': [],
                'message': "Corpo da requisição está vazio" 
            }); 
        }
    } catch (error) {
      res.status(500).json({ 
        'type': "E",
        'refeicao': [],
        'message': "Erro ao atualizar refeicoes"});
    }
  },

  async deleteRefeicoes(req, res) {
    try {
        if(req.body != [] && req.body != undefined ){
            var refs = req.body.refeicoes;
            if(refs.length != 0 && Utils.naoNulo(refs[0].id_usuario)){
                for(var i = 0; i < refs.length; i++){
                    let ref = new RefeicaoModel(refs[i]);
                    await RefeicaoDAO.deleteRefeicao(ref);
                }
                var refeicoes = await RefeicaoDAO.selectTodasRefeicoesUsuario(new RefeicaoModel(refs[0]));
                res.status(200).json({ 
                    'type': "S",
                    'refeicoes': refeicoes,
                    'message': "Sucesso ao deletar refeicoes do usuário" 
                });
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'refeicoes': [],
                    'message': "lista de refeicoes para deletar está vazia" 
                });  
            }
        }else{
            res.status(400).json({ 
                'type': "E",
                'refeicoes': [],
                'message': "Corpo da requisição está vazio" 
            }); 
        }
    } catch (error) {
        console.log(error)
      res.status(500).json({ 
        'type': "E",
        'refeicao': [],
        'message': "Erro ao deletar refeicoes" });
    }
  },
  
};

module.exports = RefeicaoController;