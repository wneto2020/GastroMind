const mongoose = require('../../database/db')

const Schema = mongoose.Schema

const instaStatusSchema = new Schema({
    estabelecimentoId: {
        type: String
    },
    image: {
        type: String
    },
    text: {
        type: String
    }
})

const InstaStatus = mongoose.model('insta_status', instaStatusSchema)

module.exports = InstaStatus