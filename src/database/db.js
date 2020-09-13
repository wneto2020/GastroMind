const mongoose = require('mongoose')

    mongoose.connect('mongodb://localhost/gastromind', {
        useMongoClient: true
    }).then(() => {
        console.log('MongoDb Conectado')
    }).catch((err) => {
        console.log('Houve um erro' + err)
    })
    mongoose.Promise = global.Promise



module.exports = mongoose