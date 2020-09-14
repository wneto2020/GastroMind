const express = require('express')

const authMiddleware = require('../middlewares/auth')

const router = express.Router()

const cookieParser = require('cookie-parser')

const Cliente = require('../models/cliente')

const Mesa = require('../models/mesas')

const HistoricoReserva = require('../models/historico_reserva')

const qrCode = require('../modules/qrcode')

router.use(authMiddleware)
router.use(cookieParser()) 

router.post('/reservar_mesa', async (req, res) => {
    const id = req.userId

    try {

        const reserva = await HistoricoReserva.create(req.body )

        res.send({ reserva, qrCode: qrCode('https://www.gastromind.com/mesa/' + reserva.id)})

    } catch (err) {
        res.status(400).send({ error: 'Falha ao reservar mesa.' })
    }
})

router.post('/agendar_pedido', async (req, res) => {
    const id = req.userId

    try {

        

    } catch (err) {
        res.status(400).send({ error: 'Falha ao agendar pedido.' })
    }
})

router.post('/editar_cliente', async (req, res) => {
    const id = req.userId

    try {

        const editar = await Cliente.findByIdAndUpdate(req.body )

        res.send({ sucesso: 'Seus dados foram atualizados.' })

    } catch (err) {
        res.status(400).send({ error: 'Falha ao atualizar seus dados.' })
    }
})

router.post('/cesta', async (req, res) => {
    const id = req.userId

    try {

        

    } catch (err) {
        res.status(400).send({ error: 'falha ao se conectar a cesta' })
    }

})


router.post('/inserir_pedido_mesa', async (req, res) => {
    const id = req.userId

    try {

        

    } catch (err) {
        res.status(400).send({ error: 'falha ao atualizar mesa' })
    }
})


router.post('/remover_produto_cesta', async (req, res) => {
    const id = req.userId

    try {

        

    } catch (err) {
        res.status(400).send({ error: 'falha ao remover produto cesta' })
    }
})




module.exports = app => app.use('/user', router)