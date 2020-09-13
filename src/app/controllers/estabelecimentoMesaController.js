const express = require('express')

const authMiddleware = require('../middlewares/auth')

const router = express.Router()

const cookieParser = require('cookie-parser')

const Mesa = require('../models/mesas')

router.use(authMiddleware)
router.use(cookieParser()) 


router.post('/mesa', async (req, res) => {
    const id = req.userId

    try {


        

    } catch (err) {
        res.status(400).send({ error: 'Falha ao se conectar com a mesa' })
    }
})

router.post('/cadastrar_mesa', async (req, res) => {
    const id = req.userId

    try {


        const mesa = await Mesa.create(req.body )

        res.send({ mesa })
    
    } catch (err) {
        res.status(400).send({ error: 'Falha ao cadastrar mesa' })
    }
})

router.post('/atualizar_mesa', async (req, res) => {
    const id = req.userId

    try {

        
        const mesa = await Mesa.findByIdAndUpdate(req.body )

        res.send({ sucesso: 'Mesa Atualizada' })

    } catch (err) {
        res.status(400).send({ error: 'Falha ao atualizar mesa' })
    }
})

router.post('/deletar_mesa', async (req, res) => {
    const id = req.userId

    try {

        const mesa = await Mesa.findByIdAndDelete(req.body )

        res.send({ sucesso: 'Mesa Deletada' })

    } catch (err) {
        res.status(400).send({ error: 'Falha ao deletar produto' })
    }
})


module.exports = app => app.use('/business/', router)