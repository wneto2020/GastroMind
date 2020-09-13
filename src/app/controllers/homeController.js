const express = require('express')
const authMiddleware = require('../middlewares/auth')
const router = express.Router();

router.use(authMiddleware)



router.get('/', authMiddleware, (req, res) => {
    res.send({ ok: true, user: req.userId })
})

router.get('/home/', authMiddleware, (req, res) => {
    res.send('testando')
}) 

module.exports = app => app.use('/home', router)