const mongoose = require('../../database/db')

const Schema = mongoose.Schema

const ComprasSchema = new Schema({
    mesaID: {
        type: Number,
        required: true
    },
    estabelecimento: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    cpfnota: {
        type: Number,
        required: true
    },
    metodopagamento: {
        type: String,
        required: true
    },
    CreateAt: {
        type: Date,
        default: Date.now
    }

})

const Compras = mongoose.model('compras', ComprasSchema)

model.exports = Compras