const express = require('express')

const authMiddleware = require('../middlewares/auth')

const router = express.Router();

const axios = require('axios')
//router.use(authMiddleware)

const publicIp = require('public-ip')

router.get('/local', async(req, res) => {
    publicIp.v4().then( async (ip) => {
    
        const instance = axios.create({
            baseURL: 'http://ip-api.com/json/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        })

       const dados = await axios.get('http://ip-api.com/json/' + ip, instance)
        
       console.log(dados)
        res.send({
            country: dados.data.country,
            regionName: dados.data.regionName,
            region: dados.data.region,
            city: dados.data.city
        })
      })
})

module.exports = app => app.use('/cliente', router)