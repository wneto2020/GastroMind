const mongoose = require("../../database/db")

const Schema = mongoose.Schema


const clienteSchema = new Schema ({
    nome: {
        type: String,
        required: true
    }, 
    sobrenome: {
        type: String,
        required: true
    },
    idioma: {
        type: String,
        required: true
    },
    cpf: {
        type: Number
    },
    foto:{
        type:String
        //Caminho da foto
    },
    email: {
      type: String,
      required:true,
      unique: true  
    },
    password: {
        type: String,
        required:true,
        select: false     
    },
    passwordResetToken: {
        type: String,
        select: false
    },
    passwordResetExpires: {
        type: Date,
        select: false
    },
    PedidosRealizados: {
        type: Number
    },
    nota: {
        type: Number
    },
    CreateAt: {
        type: Date, 
        default: Date.now
    }
})


const Cliente = mongoose.model('cliente', clienteSchema)

module.exports = Cliente 

