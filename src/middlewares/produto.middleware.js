const mongoose = require('mongoose');

const validarId = (req, res, next) => {
    const parametroId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validarCorpo = (req, res, next) => {
  const produto = req.body;
  if (
    !produto ||
    !produto.nome ||
    !produto.descricao ||
    !produto.marca ||
    !produto.valor ||   
    !produto.tamanho
  ) {
    return res
      .status(400)
      .send({ message: 'Envie o todos os campos do produto!' });
  }
  next();
};

module.exports = {
  validarId,
  validarCorpo,
};
