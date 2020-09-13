const mongoose = require('../../database/db')

const Schema = mongoose.Schema

const ProdutosSchema = new Schema({
    estabelecimentoID: {
        type: String,
        required: true
    },
    estoqueID: {
        type: String,
        required: true
    },
    foto: {
        //Caminho da foto
    },
    categoria: {
        type: String,
        required: true
    },
    subcategoria: {
        type: String,
        required: true
    },
    descricao: {
        type: String
    },
    precoanterior: {
        type: Number
    },
    promocao: {
        type: Number
    },
    precoatual: {
        type: Number,
        required: true
    },
    destaque: {
        type: String
    },
    quantidade: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }

})

const Produtos = mongoose.model('prodtuso', ProdutosSchema)

model.exports = Produtos