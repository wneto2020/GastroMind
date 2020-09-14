const express = require('express')

const app = express()

const handlebars = require('express-handlebars')

const bodyParser = require('body-parser')

const path = require('path')


    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    app.use(express.static(path.join(__dirname, "public")))


    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')



    app.get('/business/home', (req,res) => {
        res.render(__dirname + '/views/layouts/dashboard')
    })

    app.get('/business/mesas', (req,res) => {
        res.render(__dirname + '/views/layouts/mesas')
    })

    app.get('/business/reservas', (req,res) => {
        res.render(__dirname + '/views/layouts/reservas')
    })


    app.get('/business/estoque/comida', (req,res) => {
        res.render(__dirname + '/views/layouts/estoque_comida')
    })

    app.get('/business/estoque/bebida', (req,res) => {
        res.render(__dirname + '/views/layouts/estoque_bebida')
    })

    app.get('/business/estoque/limpeza', (req,res) => {
        res.render(__dirname + '/views/layouts/estoque_limpeza')
    })

    app.get('/business/mesas_inserir', (req,res) => {
        res.render(__dirname + '/views/layouts/estoque_limpeza')
    })

    app.get('/business/cardapio', (req,res) => {
        res.render(__dirname + '/views/layouts/cardapio')
    })

    app.get('/business/instagram', (req,res) => {
        res.render(__dirname + '/views/layouts/instagram')
    })


   require('./src/app/controllers/index')(app)


app.listen(3000, function(){
    console.log('Servidor Rodando....')
})
