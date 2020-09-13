const mongoose = require('../../database/db')

const Schema = mongoose.Schema

const FeedbackClienteSchema = new Schema({
    estabelecimentoID: {
        type: String,
        required: true
    },
    mesaID:{
        type: Number
    },
    clienteID: {
        type: String,
        required: true
    },
    nota: {
        type: Number
    },
    comentario: {
        type: String,
        required: true

    },
    CreateAt: {
        type: Date,
        default: Date.now
    }

})



const FeedbackCliente = mongoose.model('feedback_cliente', FeedbackClienteSchema)

module.exports = FeedbackCliente