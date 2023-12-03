const CategoriaDAO = require("../database/DAO/CategoriaDAO.js");

const CategoriaControler = {
  async selectCategorias(req, res) {
    try {
      const categorias = await CategoriaDAO.selectCategorias();
      res.status(200).json({
        'type': "S",
        'categorias': categorias,
        'message': 'Sucesso ao carregar categorias'
     });
    } catch (error) {
      console.log(error);
      res.status(500).json({ 
        'type': "E",
        'categorias': [],
        'message': "Erro ao recuperar categorias" });
    }
  },

  async insertCategorias(req, res){
    try{
      const categorias = await CategoriaDAO.selectCategorias();
      if(categorias.length > 0){
        res.status(200).json({ 
          'type': "S",
          'message': "Categorias já criadas" });
      }else{
        await CategoriaDAO.insertCategorias();
        res.status(200).json({ 
          'type': "S",
          'message': "Categorias criadas" });

      }
    }catch(error){
      console.log('Erro ao criar categorias')
      console.log(error)
      res.status(500).json({ 
        'type': "E",
        'message': "Erro ao criar categorias" });
    }
    
  }
  
};

module.exports = CategoriaControler;