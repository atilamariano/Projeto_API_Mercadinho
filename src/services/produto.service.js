const Produto = require('../models/Produto');
const mongooose = require('mongoose');

//Achar todos
const acheTodosProdutosService = async () => {
  const produtos = await Produto.find();
  return produtos;
};

//Achar por ID
const achePorIdService = async (parametroId) => {
  const produto = await Produto.findById(parametroId);
  return produto;
};

//Criar
const criarProdutoService = async (novoProduto) => {
  const paletaCriada = await Produto.create(novoProduto);
  return paletaCriada;
};

//Atualizar
const atualizarProdutService = async (id, ediçaoProduto) => {
  const produtoAtualizado = await Produto.findByIdAndUpdate(id, ediçaoProduto);
  return produtoAtualizado;
};

//Deletar
const deletarProdutoService = async (id) => {
  return await Produto.findByIdAndDelete(id);
};

module.exports = {
  acheTodosProdutosService,
  achePorIdService,
  criarProdutoService,
  atualizarProdutService,
  deletarProdutoService,
};
