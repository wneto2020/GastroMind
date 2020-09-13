const mongoose = require('../../database/db')

const Schema = mongoose.Schema

const PedidosMesaSchema = new Schema({
    estabelecimentoID: {
        type: String,
        require: true
    },
    produtoID: {
        type: String,
        required: true
    },
    mesaID: {
        type: Number,
        required: true
    },
    clienteID: {
        type: String,
        required: true
    },
    cadeiraID: {
        type: Number,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    observacao: {
        type: String
    }
})


const PedidosMesa = mongoose.model('pedidosmesa', PedidosMesaSchema)

model.exports = PedidosMesa