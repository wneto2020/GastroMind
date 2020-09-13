const mongoose = require('../../database/db')

const Schema = mongoose.Schema

const MesasSchema = new Schema({
    estabelecimentoID: {
        type: String,
        required: true
    },
    cadeiras: {
        type: Number,
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