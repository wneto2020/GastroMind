const mongoose = require("../../database/db")

const Schema = mongoose.Schema


const EstabelecimentoSchema = new Schema({
    usuario: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    sobrenome:
    {
        type: String,
        required: true

    },
    empresa:{
        type: String,
        required: true
    },
    foto: {
        type: String
        //Caminho da foto
    },
    cnpj: {
        type: Number,
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
    passwordReseteExpires:{
        type: Date,
        select: false
    },
    vendasRealizadas: {
        type: Number,
        required: true
    },
    nota: {
        type: Number
    },
    descricao: {
        type: String, 
        required: true

    },
    categoria: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    cep: {
        type: Number,
        required: true
    },
    numero: {
        type: Number,
        require: true
    },
    endereco: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    instagram: {
        type: String
    },
    mpToken: {
        type: String,
        
    },
    mpKey: {
        type: String
    },
    CreateAt:{
        type: Date,
        default: Date.now
    }
    



    
})

const Estabelecimento = mongoose.model("estabelecimento", EstabelecimentoSchema)
model.exports = Estabelecimento