const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: `{VALUE} no es un rol valido`
};



const usuarioSchema = new Schema({
    nombre: {type: String, required: [true, 'El nombre es obligatorio'] },
    email: { type: String, unique: true, required: [true, 'El correo es obligatorio']},
    password: {type: String, required: [true, 'La clave es obligatoria'] },
    role: { type: String,required: true, default: 'USER_ROLE', enum: rolesValidos }
});


usuarioSchema.plugin( uniqueValidator, { message: `{PATH} debe de ser unico`});

module.exports = mongoose.model('Usuario', usuarioSchema);
