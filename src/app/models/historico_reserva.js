const mongoose = require('../../database/db')

const Schema = mongoose.Schema

const HistoricoReservaSchema = new Schema ({
    estabelecimentoID: {
        type: String,
        required: true
    },
    mesaID: {
        type: Number,
        required: true
    },
    cadeiraID: {
        type: Number,
        required: true
    },
    clienteID: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    CreateAt: {
        type: Date,
        default: Date.now
    }
})

const HistoricoReserva = mongoose.model('historicoreserva', HistoricoReservaSchema)

model.exports = HistoricoReserva