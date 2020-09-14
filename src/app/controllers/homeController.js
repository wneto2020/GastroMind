const express = require('express')


const authMiddleware = require('../middlewares/auth')

const router = express.Router();

const cookieParser = require('cookie-parser')


//router.use(authMiddleware)



router.get('/', (req, res) => {
    res.send()
})


module.exports = app => app.use('/home', router)