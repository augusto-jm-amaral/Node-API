var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    Schema = mongoose.Schema;

module.exports = function() {

    var schema = new Schema({
        name: {
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
        password: {
            type: String,
            required: true
        },
        permission: {
        	type: String,
        	enum: ['admin', 'common'],
            default: 'common',
            required: true
        },
        create: {
            type: Number,
            require: true,
            default: new Date().getTime()
        },
        update: {
            type: Number,
            require: true,
            default: new Date().getTime()
        }
    });

    schema.methods.validPass = function(pass){
        
        return bcrypt.compareSync(pass, this.password);;
    };

    schema.pre('save', function (next) {

        var salt = bcrypt.genSaltSync();

        this.password = bcrypt.hashSync(this.password, salt);

        next();
    });

    return mongoose.model('User', schema);
};
