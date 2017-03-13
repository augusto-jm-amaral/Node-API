//Importa o framework Express e o middleware Consign
var app = require('express')(),
    consign = require('consign');

//Injeção utilizando Consign
consign({verbose: true})
  .then('./libs/db.js')
  .then('models')
  .then('./libs/auth.js')
  .then('./libs/middlewares.js')
  .then('./libs/http.js')
  .then('./libs/io.js')
  .then('routes')
  .then('./libs/boot.js')
  .into(app);

module.exports = app;