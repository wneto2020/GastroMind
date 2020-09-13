const express = require('express')

const authMiddleware = require('../middlewares/auth')

const FeedbackEstabelecimento = require('../models/feedback_estabelecimento')

const FeedbackCliente = require('../models/feedback_cliente')

const FeedbackPedido = require('../models/feedback_pedido')

const router = express.Router();

router.use(authMiddleware)

router.get('/business', authMiddleware, async(req, res) => {
    const id = req.userId

    try {

        await FeedbackEstabelecimento.create(req.body)

        res.send({ sucesso: 'Feedback Enviado com sucesso!' })

    } catch (err) {
        res.status(400).send({ error: 'Falha ao da feedback ao estabelecimento.' })
    }
}) 

router.get('/cliente', authMiddleware, async(req, res) => {
    const id = req.userId

    try {

        await FeedbackCliente.create(req.body)

        res.send({ sucesso: 'Feedback Enviado com sucesso!' })

    } catch (err) {
        res.status(400).send({ error: 'Falha ao da feedback ao cliente.' })
    }
}) 

router.get('/pedido', authMiddleware, async(req, res) => {
    const id = req.userId

    try {

        await FeedbackPedido.create(req.body)

        res.send({ sucesso: 'Feedback Enviado com sucesso!' })

    } catch (err) {
        res.status(400).send({ error: 'Falha ao da feedback ao pedido.' })
    }
}) 

module.exports = app => app.use('/feedback', router)