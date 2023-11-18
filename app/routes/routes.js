const express = require('express')
const router = express.Router();
const CategoriaController = require("../controllers/CategoriaController");
const UsuarioController = require("../controllers/UsuarioController");
const ReceitaController = require("../controllers/ReceitaController");
const FavoritosController = require("../controllers/FavoritosController");
const RefeicaoController = require("../controllers/RefeicaoController");

// Controladores

//router.put('/login', CreditSalesController.captureCreditPayment)
//usuário
router.post('/registerUser',   UsuarioController.insertUsuario);
router.post('/loginUser',      UsuarioController.loginUsuario);
router.post('/selectUserName', UsuarioController.selectNomeUsuario);
router.post('/selectUserId',   UsuarioController.selectUsuarioId);
router.post('/updateUser',     UsuarioController.updateUsuario);

//categoria
router.get('/selectCategories', CategoriaController.selectCategorias);

//receita
router.post('/registerRecipe',           ReceitaController.insertReceita);
router.post('/updateRecipe',             ReceitaController.updateReceita);
router.post('/deleteRecipe',             ReceitaController.deleteReceita);
router.post('/selectRecipeForCategory',  ReceitaController.selectReceitasCategoria);
router.post('/selectRecipeForId',        ReceitaController.selectReceitasId);
router.post('/selectRecipeForTitle',     ReceitaController.selectReceitasTitulo);
router.post('/selectRecipeForUser',      ReceitaController.selectReceitasUsuario);
router.post('/selectRecipeForTitleUser', ReceitaController.selectReceitasUsuarioTitulo);

//favoritos
router.post('/registerFav', FavoritosController.insertFavoritosUsuario);
router.post('/selectFavs',  FavoritosController.selectFavoritosUsuario);
router.post('/deleteFavs',  FavoritosController.deleteFavoritosUsuario);

//refeicao
router.post('/registerMeal', RefeicaoController.insertRefeicao);
router.post('/updateMeal',   RefeicaoController.updateRefeicao);
router.post('/selectMeal',   RefeicaoController.selectRefeicaoUsuario);
router.post('/deleteMeal',   RefeicaoController.deleteRefeicoes);



module.exports = router;