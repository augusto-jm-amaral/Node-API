var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    Schema = mongoose.Schema;

module.exports = function() {

    var schema = new Schema({
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        senha: {
            type: String,
            required: true
        },
        permission: {
        	type: String,
        	enum: ['admin', 'common']
        },
        create: {
            type: Number,
            require: true,
            default: new Date().getTime()
        },
        update: {
            type: String,
            require: true,
            index: {
                unique: true
            }
        }
    });

    schema.method('encripitarSenha', function(usuario) {
        var salt = bcrypt.genSaltSync();
        usuario.senha = bcrypt.hashSync(usuario.senha, salt);
        return usuario;
    });

    schema.method('gerarSenha', function(senha) {
        var salt = bcrypt.genSaltSync();
        senha = bcrypt.hashSync(senha, salt);
        
        return senha;
    });

    schema.method('validarSenha', function(encodedPassword, password) {
        return bcrypt.compareSync(password, encodedPassword);
    });

    schema.method('validarUsuario', function(sessionUser, usuario) {
        // return (sessionUser._id == usuario._id) && (sessionUser.email === usuario.email);
        return (sessionUser._id == usuario._id);
    });

    return mongoose.model('User', schema);
};
