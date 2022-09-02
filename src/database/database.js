const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose
    .connect('mongodb+srv://admin:58627094@cluster0.smajghw.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MONGO DB CONECTADO');
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
}

module.exports = connectToDatabase;
