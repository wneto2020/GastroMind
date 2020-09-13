const mongoose = require('../../database/db')

const Schema = mongoose.Schema

const FeedbackPedidoSchema = new Schema({
    estabelecimentoID: {
        type: String,
        required: true
    },
    clienteID: {
        type: String,
        required: true
    },
    comentario: {
        type: String,
        required: true
    },
    nota: {
        type: Number
    },
    CreateAt: {
        type: Date,
        default: Date.now
    }
})

const FeedbackPedido = mongoose.model("feedback_pedido", FeedbackPedidoSchema)
module.exports = FeedbackPedido