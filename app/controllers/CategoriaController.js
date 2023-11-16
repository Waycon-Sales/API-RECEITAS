const CategoriaDAO = require("../database/DAO/CategoriaDAO.js");

const CategoriaControler = {
  async selectCategorias(req, res) {
    try {
      const categorias = await CategoriaDAO.selectCategorias();
      console.log(categorias);
      res.status(200).json({
        'type': "S",
        'categorias': categorias,
        'message': 'Sucesso ao carregar categorias'
     });
    } catch (error) {
      res.status(500).json({ 
        'type': "E",
        'categorias': [],
        'message': "Erro ao recuperar categorias" });
    }
  },
  
};

module.exports = CategoriaControler;