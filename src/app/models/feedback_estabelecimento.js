const mongoose = require('../../database/db')

const Schema = mongoose.Schema

const FeedbackEstabelecimentoSchema = new Schema({
    estabelecimentoID: {
        type: String,
        required: true
    },
    clienteID: {
        type: String,
        required: true
    },
    cadeiraID: {
        type: Number,
        
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

const FeedbackEstabelecimento = mongoose.model("feedbackestabelecimento", FeedbackEstabelecimentoSchema)
model.exports = FeedbackEstabelecimento