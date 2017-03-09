const bcrypt = require('bcrypt-nodejs');

module.exports = function (app) {
	
	const User = app.libs.db.models.User;

  app.route('/user/:_id')
    .get(function(req, res){

      req.checkParams('_id', '').notEmpty().isMongoId();

      var erros = req.validationErrors();

      if(!erros){

        User.findOne({ _id: req.params._id })
          .select({
            _id: 1,
            name: 1,
            email: 1
          }).then(function(user){
          
            if(user)
              res.status(200).json(user).end();
            else
              res.sendStatus(404).end();

          }).catch(function(err){
            res.sendStatus(412).end();
          });

      }else{
        res.sendStatus(400).end();

      }
    });


  app.route('/user')
    .post(function(req, res){

      req.checkBody('name', '').notEmpty().isAlphanumeric();
      req.checkBody('email', '').notEmpty().isEmail();
      req.checkBody('password', '').notEmpty().isAlphanumeric();

      var erros = req.validationErrors();

      if(!erros){

        var user = new User(req.body);
        user = User.encriptarSenha(user);
        user.permission = 'common';

        user.save(function(err){
          if(err)
            res.sendStatus(412).end();
          else
            res.sendStatus(202).end();

        });

      }else{
        res.sendStatus(400).end();
      }
    });
}