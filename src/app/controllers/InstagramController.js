const express = require('express')

const authMiddleware = require('../middlewares/auth')

const router = express.Router();

const axios = require('axios')

const InstaStatus = require('../models/instagram_status')

const InstaPost = require('../models/instagram_post')

//router.use(authMiddleware)
const instance = axios.create({
    baseURL: 'https://api.proxycrawl.com/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });


router.get('/instagram/:social', async(req, res) => {
    const instagram = req.params.social

   await axios({
        method: 'get',
        url: 'https://api.proxycrawl.com/?token=Igi6dUIuBkQnZVft-o2fMw&url=https://www.instagram.com/'+instagram+'/&scraper=instagram-profile',
        responseType: 'json'
    }, instance).then( async(response) => {
        
        const stories = response.data.body.openStories

        const posts = response.data.body.posts

        const storiesCount = stories.length

        const postsCount = posts.length

        for (let count = 0; count < storiesCount; count++) {
            let imagemStatus = response.data.body.openStories[count].image
            let textStatus = response.data.body.openStories[count].text

            if (storiesCount != storiesCount - 1)
            await InstaStatus.create({ image: imagemStatus, text: textStatus})

                for (let countPost = 0; countPost < postsCount; countPost++) {
                    let textPost = response.data.body.posts[countPost].imageData
                    let imagePost = response.data.body.posts[countPost].image
                    let linkPost = response.data.body.posts[countPost].link

                    if (postsCount != postsCount - 1)
                    await InstaPost.create({ image:imagePost, text: textPost, link: linkPost})
                }
        }

    }).catch(function (error) {
        console.log('Error ' + error)
      })   

      res.send({ sucesso: 'Instagram vinculado.' })
})

router.get('/insta/posts', async(req, res) => {

   const status = await InstaPost.find().exec()

    let resultado = ``

    status.forEach((data) => {
        resultado += `<img src="${data.image}" width="80%"> <p>${data.text}<p> <a hre="${data.link}">ver<a>`
    })


    res.send(resultado)
})

router.get('/insta/status', async(req, res) => {

    const status = await InstaStatus.find().exec()
 
     let resultado = ``
 
     status.forEach((data) => {
         resultado += `<img src="${data.image}" width="80%"> <p>${data.text}<p>`
     })
 
 
     res.send(resultado)
 })

module.exports = app => app.use('/business', router)