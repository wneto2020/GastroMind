const mongoose = require('../../database/db')

const Schema = mongoose.Schema

const EstoqueSchema = new Schema({
    estabelecimentoID: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    totalprodutos: {
        type: Number,
        required: true
    }
})

const Estoque = mongoose.model('estoque', EstoqueSchema)

module.exports = Estoque