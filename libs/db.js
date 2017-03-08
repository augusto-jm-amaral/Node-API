var mongoose = require('mongoose');

module.exports = function(app) {

    mongoose.connect('mongodb://localhost/api', { server: { poolSize: 30 }});

    // mongoose.connection.on('connected',  () => {
    //   console.log('Mongoose:: Conectado em ' + cfg.url);
    //   mongoose.set('debug', function (collectionName, method, query, e) {

    //     app.libs.logger.info(collectionName+'.'+ method + '(' + JSON.stringify(query) + ',' + JSON.stringify(e) +')');

    //   });
    // });

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