const mongoose = require('../../database/db')

const Schema = mongoose.Schema

const instaPostSchema = new Schema({
    estabelecimentoId: {
        type: String
    },
    image: {
        type: String
    },
    text: {
        type: String
    },
    link: {
        type: String
    }
})

const InstaPost = mongoose.model('insta_posts', instaPostSchema)

module.exports = InstaPost