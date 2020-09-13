const express = require('express')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const crypto = require('crypto')

const mailer = require('../modules/mailer')

const cookieParser = require('cookie-parser')

const authConfig = require('../config/auth.json')

const Cliente = require('../models/cliente')

const router = express.Router()

router.use(cookieParser()) 

function generateToken(params = {}) {
    return jwt.sign(params , authConfig.secret, {
        expiresIn: 86400
    })
}

router.post('/register_business', async (req, res) => {
    const { email } = req.body

    try {
        if(await Cliente.findOne({ email }))
            return res.status(400).send({ error: 'Business already exists'})

        const cliente = await Cliente.create(req.body)

        cliente.password = undefined

        res.cookie('Authorization', 'Bearer ' + generateToken({ id: user.id }))

        return res.send({ cliente,
        token: generateToken({ id: cliente.id })
     })
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'})
    }
})

router.post('/register', async (req, res) => {
    const { email } = req.body

    try {
        if(await Cliente.findOne({ email }))
            return res.status(400).send({ error: 'Cliente already exists'})

        const cliente = await Cliente.create(req.body)

        cliente.password = undefined

        res.cookie('Authorization', 'Bearer ' + generateToken({ id: user.id }))

        return res.send({ cliente,
        token: generateToken({ id: cliente.id })
     })
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'})
    }
})

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body

    const cliente = await Cliente.findOne({ email }).select('+password')

    if (!cliente)
        return res.status(400).send({ error: 'Cliente not found' })

    if (!await bcrypt.compare(password, cliente.password))
        return res.status(400).send({ error: 'Invalid password' })

    cliente.password = undefined

    res.cookie('Authorization', 'Bearer ' + generateToken({ id: user.id }))

    res.send({ 
       cliente,
       token: generateToken({ id: cliente.id }),
    })   
})

router.post('/forgot_password', async (req, res) => {
    const { email } = req.body

    try {

        const cliente = await Cliente.findOne({ email })

        if(!cliente)
            return res.status(400).send({ erro: 'Cliente not exists' })

        const token = crypto.randomBytes(20).toString('hex')
        
        const now = new Date();
        now.setHours(now.getHours() + 1)

        await Cliente.findByIdAndUpdate(cliente.id, {
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: now
            }
        }, { new: true, useFindAndModify: false })
        
        mailer.sendMail({
            to: email,
            subject: "Request password 🔐",
            from: 'gastromind@gfrancodev.tech',
            template: 'auth/forgot_password',
            context: { token }, 
        }, (err) => {
            if(err)
                return res.status(400).send({ erro: 'Cannot send forgot password, try again' })

            return res.send();
        })

    } catch(err) {
        res.status(400).send({ error: 'Erro on forgot password, try again'})
    }
})

router.post('/reset_password', async (req, res) => {
    const { email, token, password} = req.body
        console.log(email, token, password)
   try {
    const cliente = await Cliente.findOne({ email })
    .select('+passwordResetToken passwordResetExpires')

    if (!cliente)
         return res.status(400).send({ error: 'Cliente not found' })

    if (token !== cliente.passwordResetToken)
        return res.status(400).send({ error: 'Token invalid' })

    const now = new Date()
    
    if (now > cliente.passwordResetExpires)
        return res.status(400).send({ error: 'Token expired, generate a new one' })

    cliente.password = password

    await cliente.save()

    res.send()
   } catch (err) {
       res.status(400).send({ erro: 'Cannot reset password, try again'})
   }

})

module.exports = app => app.use('/auth', router)