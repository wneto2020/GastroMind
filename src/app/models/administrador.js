const mongoose = require("../../database/db")

const Schema = mongoose.Schema

const AdministradorSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    passwordResetToken: {
        type: String,
        select: false
    },
    passwordResetExpires: {
        type: Date,
        default: Date.now

    }
})

const Administrador = mongoose.model('administrador', AdministradorSchema)
model.exports = Administrador