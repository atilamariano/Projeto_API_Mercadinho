const route = require('express').Router();
const controllerProdutos = require('../controllers/produto.controller');
const {validarId, validarCorpo} = require("../middlewares/produto.middleware")

route.get('/todos-produtos', controllerProdutos.acheTodosProdutosController);
route.get('/produto/:id',validarId, controllerProdutos.achePorIdController);
route.post('/criar-produto', validarCorpo, controllerProdutos.criarProdutoController);
route.put('/atualizar-produto/:id', validarId, validarCorpo, controllerProdutos.atualizarProdutoController,);
route.delete('/deletar-produto/:id', validarId, controllerProdutos.deletarProdutoController,);

module.exports = route;
