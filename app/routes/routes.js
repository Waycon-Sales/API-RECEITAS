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
router.get('/selectUserName', UsuarioController.selectNomeUsuario);
router.get('/selectUserId',   UsuarioController.selectUsuarioId);
router.put('/updateUser',     UsuarioController.updateUsuario);
router.delete('/deleteUser',     UsuarioController.deleteUsuario);

// registrar usuário, efetuar login, selecionar usuário por nome, selecionar usuário por ID, atualizar usuário

//categoria
router.get('/selectCategories', CategoriaController.selectCategorias);

//selecionar categorias

//receita
router.post('/registerRecipe',           ReceitaController.insertReceita);
router.post('/updateRecipe',             ReceitaController.updateReceita);
router.post('/deleteRecipe',             ReceitaController.deleteReceita);
router.post('/selectRecipeForCategory',  ReceitaController.selectReceitasCategoria);
router.post('/selectRecipeForId',        ReceitaController.selectReceitasId);
router.post('/selectRecipeForTitle',     ReceitaController.selectReceitasTitulo);
router.post('/selectRecipeForUser',      ReceitaController.selectReceitasUsuario);
router.post('/selectRecipeForTitleUser', ReceitaController.selectReceitasUsuarioTitulo);

//inserir receita, deletar receita, atualizar receita, selecionar receita por categoria, selecionar receita por titulo, selecionar receita por ID, selecionar receita por usuário que a criou, selecionar por titulo e por usuário

//favoritos
router.post('/registerFav', FavoritosController.insertFavoritosUsuario);
router.post('/selectFavs',  FavoritosController.selectFavoritosUsuario);
router.post('/deleteFavs',  FavoritosController.deleteFavoritosUsuario);

//registrar favorito, selecionar favorito, deletar favorito

//refeicao
router.post('/registerMeal', RefeicaoController.insertRefeicao);
router.post('/updateMeal',   RefeicaoController.updateRefeicao);
router.post('/selectMeal',   RefeicaoController.selectRefeicaoUsuario);
router.post('/deleteMeal',   RefeicaoController.deleteRefeicoes);

//registrar refeição, deletar refeição, selecionar refeições de determinado usuário e atualizar refeições

module.exports = router;