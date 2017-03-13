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
                }, function(err, user) {
                    if (user && !err) {
                        if (user.validarSenha(user.senha, senha)) {
                            const playload = {
                                _id: user._id
                            };
                            res.json({
                                token: jwt.encode(playload, 'S3C43T*!*&8!*&!'),
                                nome: user.nome,
                                _id: user._id
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