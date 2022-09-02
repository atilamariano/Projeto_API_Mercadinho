const produtosService = require('../services/produto.service');
const mongooose = require('mongoose');

//Achar todos
const acheTodosProdutosController = async (req, res) => {
  const produtos = await produtosService.acheTodosProdutosService();
  if (produtos.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum produto cadastrado!' });
  }
  res.send(produtos);
};

//Achar por ID
const achePorIdController = async (req, res) => {
  const parametroId = req.params.id;
  const escolhaProduto = await produtosService.achePorIdService(parametroId);
  if (!escolhaProduto) {
    return res.status(404).send({ message: 'Produto não encontrado!' });
  }
  res.send(escolhaProduto);
};

//Criar
const criarProdutoController = async (req, res) => {
  const produto = req.body;
  const novoProduto = await produtosService.criarProdutoService(produto);
  res.status(201).send(novoProduto);
};

//Atualizar
const atualizarProdutoController = async (req, res) => {
  const parametroId = req.params.id;
  const ediçaoProduto = req.body;
  const atualizaçaoProduto = await produtosService.atualizarProdutService(
    parametroId,
    ediçaoProduto,
  );
  res.send(atualizaçaoProduto);
};

//Deletar
const deletarProdutoController = async (req, res) => {
  const parametroId = req.params.id;
  await produtosService.deletarProdutoService(parametroId);
  res.send({ message: 'Produto deletado com sucesso!' });
};

module.exports = {
  acheTodosProdutosController,
  achePorIdController,
  criarProdutoController,
  atualizarProdutoController,
  deletarProdutoController,
};
