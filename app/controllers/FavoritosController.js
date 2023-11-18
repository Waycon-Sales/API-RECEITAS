const FavoritoModel = require("../model/Favoritos.js"); 
const FavoritoDAO = require("../database/DAO/FavoritoDAO.js");
const Utils = require("../utils/Utils.js");

const FavoritoControler = {
  async selectFavoritosUsuario(req, res) {
    try {
      if(req.body != undefined && req.body != []){
        var fav = new FavoritoModel(req.body);
        if(Utils.naoNulo(fav.id_usuario)){
            var favoritos = await FavoritoDAO.selectFavoritos(fav)
            res.status(200).json({ 
                'type': "S",
                'favoritos': favoritos,
                'message': "Sucesso ao carregar favoritos do usuário" 
            });
        }else{
            res.status(400).json({ 
                'type': "E",
                'favoritos': [],
                'message': "Campo está vazio" 
            });  
        }
      }else{
        res.status(400).json({ 
            'type': "E",
            'favoritos': [],
            'message': "Corpo da requisição está vazio" 
        });  
      } 
    } catch (error) {
        res.status(500).json({ 
            'type': "E",
            'favoritos': [],
            'message': "Erro ao recuperar favoritos" 
        });
    }
  },

  async deleteFavoritosUsuario(req, res) {
    try {
      if(req.body != undefined && req.body != []){
        var favs = req.body.favoritos;
        if(favs.length != 0 && Utils.naoNulo(favs[0].id_usuario)){
            for(var i = 0; i < favs.length; i++){
                let fav = new FavoritoModel(favs[i]);
                await FavoritoDAO.deleteFavorito(fav);
            }
            var favoritos = await FavoritoDAO.selectFavoritos(new FavoritoModel(favs[0]))
            res.status(200).json({ 
                'type': "S",
                'favoritos': favoritos,
                'message': "Sucesso ao deletar favoritos do usuário" 
            });
        }else{
            res.status(400).json({ 
                'type': "E",
                'favoritos': [],
                'message': "lista de favoritos para deletar está vazia" 
            });  
        }
      }else{
        res.status(400).json({ 
            'type': "E",
            'favoritos': [],
            'message': "Corpo da requisição está vazio" 
        });  
      } 
    } catch (error) {
        res.status(500).json({ 
            'type': "E",
            'favoritos': [],
            'message': "Erro inesperado ao deletar favoritos" 
        });
    }
  },

  async insertFavoritosUsuario(req, res) {
    try {
      if(req.body != undefined && req.body != []){
        var fav = new FavoritoModel(req.body);
        if(Utils.naoNulo(fav.id_usuario) && Utils.naoNulo(fav.id_receita)){
            await FavoritoDAO.insertFavorito(fav);
            var favoritos = await FavoritoDAO.selectFavoritos(fav);
            res.status(200).json({ 
                'type': "S",
                'favoritos': favoritos,
                'message': "Sucesso ao inserir favoritos do usuário" 
            });
        }else{
            res.status(400).json({ 
                'type': "E",
                'favoritos': [],
                'message': "Campos estão vazios" 
            });  
        }
      }else{
        res.status(400).json({ 
            'type': "E",
            'favoritos': [],
            'message': "Corpo da requisição está vazio" 
        });  
      } 
    } catch (error) {
        res.status(500).json({ 
            'type': "E",
            'favoritos': [],
            'message': "Erro ao inserir favorito" 
        });
    }
  },
  
};

module.exports = FavoritoControler;