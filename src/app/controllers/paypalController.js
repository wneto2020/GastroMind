const express = require('express')

const authMiddleware = require('../middlewares/auth')

const router = express.Router();



router.use(authMiddleware)
//router.use(cookieParser()) 

module.exports = app => app.use('/business/payment', router)