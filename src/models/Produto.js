const mongooose = require('mongoose');

const ProdutoEsquema = new mongooose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  marca: { type: String, required: true },
  tamanho: { type: String, required: true },
  valor: { type: Number, required: true },
});

const Produto = mongooose.model('produtos', ProdutoEsquema);
module.exports = Produto;
