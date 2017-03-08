var jwt = require('jwt-simple');

module.exports = function(app) {

    const User = app.libs.db.models.User;

    app.route('/login')
        .post(function get(req, res) {

            req.checkBody('email').notEmpty();
            req.checkBody('password').notEmpty();

            var erros = req.validationErrors();

            if (!erros) {

                var email = req.body.email;
                var senha = req.body.senha;

                User.findOne({
                    email: email
                }, function(err, usuario) {
                    if (usuario && !err) {
                        if (usuario.validarSenha(usuario.senha, senha)) {
                            const playload = {
                                _id: usuario._id
                            };
                            res.json({
                                token: jwt.encode(playload, 'S3C43T*!*&8!*&!'),
                                nome: usuario.nome,
                                _id: usuario._id
                            }).end();
                        } else {
                            // app.libs.logger.error(err);
                            res.sendStatus(400).end();
                        }
                    } else {
                        // app.libs.logger.error(err);
                        res.sendStatus(400).end();
                    }
                });

            } else {
                // app.libs.logger.error(erros);
                res.sendStatus(400).end();
            }
        });
};