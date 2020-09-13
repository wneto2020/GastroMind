const mongoose = require('../../database/db')

const Schema = mongoose.Schema

const CadeirasSchema = new Schema({
    mesaID: {
        type: Number,
        required: true
    },
    estabelecimentoID: {
        type: String,
        required: true
    },
    clientID: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})


const Cadeiras = model('cadeiras', CadeirasSchema)

model.exports = Cadeiras