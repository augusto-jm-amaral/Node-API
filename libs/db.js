var mongoose = require('mongoose');
var config = require('config');

module.exports = function(app) {

    mongoose.connect(config.DBHost, { server: { poolSize: 30 }});

    mongoose.connection.on('disconnected',  () => {
      console.log('Mongoose:: Desconectado de ');
    });

    mongoose.connection.on('error',  (erro) => {
      console.log('Mongoose:: Erro na conexão, erro: ' + erro);
    });

    process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        console.log('Mongose:: Desconectado pelo termino da aplicação.');
        process.exit(0);
      });
    });

  return mongoose;
};