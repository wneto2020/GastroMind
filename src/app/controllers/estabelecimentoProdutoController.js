const express = require('express')

const authMiddleware = require('../middlewares/auth')

const router = express.Router()

const Produto = require('../models/produtos')

const cookieParser = require('cookie-parser')

router.use(authMiddleware)
router.use(cookieParser()) 

router.post('/criar_produto', async (req, res) => {
    const id = req.userId

    try {

        const produto = await Produto.create(req.body )

        res.send({ produto})   

    } catch (err) {
        res.status(400).send({ error: 'Falha ao criar produto' })
    }

})

router.post('/atualizar_produto', async (req, res) => {
    const id = req.userId

    try {

    
    const produto = await Mesa.findByIdAndUpdate(req.body )

     res.send({ sucesso: 'Produto Atualizado' })

    } catch (err) { 
        res.status(400).send({ error: 'Falha ao atualizar produto' })
    }

})

router.post('/deletar_produto', async (req, res) => {
    const id = req.userId

    try {


        const produto = await Produto.findByIdAndDelete(req.body )

        res.send({ sucesso: 'Produto Deletado' })

    } catch (err) {
        res.status(400).send({ error: 'Falha ao deletar produto' })
    }
})




module.exports = app => app.use('/business/', router)