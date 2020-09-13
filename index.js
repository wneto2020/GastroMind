const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')


    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    app.use(express.static(path.join(__dirname, "public")))


    app.get('/login', (req,res) => {
        res.send('logado')
    })

   require('./src/app/controllers/index')(app)


app.listen(3000, function(){
    console.log('Servidor Rodando....')
})
