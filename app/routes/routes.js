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
router.get('/selectUserName',  UsuarioController.selectNomeUsuario);
router.get('/selectUserId',    UsuarioController.selectUsuarioId);
router.put('/updateUser',      UsuarioController.updateUsuario);
router.delete('/deleteUser',   UsuarioController.deleteUsuario);

// registrar usuário, efetuar login, selecionar usuário por nome, selecionar usuário por ID, atualizar usuário, deletar usuário

//categoria
router.get('/selectCategories', CategoriaController.selectCategorias);
router.get('/criarCategorias', CategoriaController.insertCategorias);

//selecionar categorias

//receita
router.post('/registerRecipe',           ReceitaController.insertReceita);
router.put('/updateRecipe',              ReceitaController.updateReceita);
router.delete('/deleteRecipe',           ReceitaController.deleteReceita);
router.get('/selectRecipeForCategory',   ReceitaController.selectReceitasCategoria);
router.get('/selectRecipeForId',         ReceitaController.selectReceitasId);
router.get('/selectRecipeForTitle',      ReceitaController.selectReceitasTitulo);
router.get('/selectRecipeForUser',       ReceitaController.selectReceitasUsuario);
router.get('/selectRecipeForTitleUser',  ReceitaController.selectReceitasUsuarioTitulo);

//inserir receita, deletar receita, atualizar receita, selecionar receita por categoria, selecionar receita por titulo, selecionar receita por ID, selecionar receita por usuário que a criou, selecionar por titulo e por usuário

//favoritos
router.post('/registerFav',   FavoritosController.insertFavoritosUsuario);
router.get('/selectFavs',     FavoritosController.selectFavoritosUsuario);
router.delete('/deleteFavs',  FavoritosController.deleteFavoritosUsuario);

//registrar favorito, selecionar favorito, deletar favorito

//refeicao
router.post('/registerMeal', RefeicaoController.insertRefeicao);
router.put('/updateMeal',    RefeicaoController.updateRefeicao);
router.get('/selectMeal',    RefeicaoController.selectRefeicaoUsuario);
router.delete('/deleteMeal', RefeicaoController.deleteRefeicoes);

//registrar refeição, deletar refeição, selecionar refeições de determinado usuário e atualizar refeições

module.exports = router;