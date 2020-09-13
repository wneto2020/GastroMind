const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Painel Admin')
})

router.get('/publish', (req, res) => {
    res.send('Página de Postagens')
})

router.get('/category', (req, res) => {
    res.send('Página de Categorias')
})



module.exports = router