const crypto = require('crypto')

const findList = require('./search')

const fs = require('fs')

const Cliente = require('../models/cliente')

const Estabelecimento = require('../models/estabelecimento')

const Produto = require('../models/produtos')

const formidable = require('formidable')

const uploadPhoto = (req, id, type) => {
    const form = new formidable.IncomingForm()  

    form.parse(req, (err, fields, files) => {

    const oldpath = files.filetoupload.path

    const archivename = files.filetoupload.name.split('.')

    const permissionExtension = ['png', 'jpg', 'jpeg']

    if (findList(archivename[1], permissionExtension) != true) 
        return { error: 'extension not permited' }
                
    const archive = crypto.randomBytes(20).toString('hex')

    const newpath = './public/upload/' + archive + '.' + archivename[1]

    fs.rename(oldpath, newpath, (err) => {

    if(type == 'cliente') {
        var up = Cliente.findByIdAndUpdate(id, {
            '$set': {
                photo: newpath
            }
        }, { new: true, useFindAndModify: false }).then(() => {
            return true
        }).catch((err) => {
            return false
        })
    }

    if(type == 'estabelecimento') {
        var up =  Estabelecimento.findByIdAndUpdate(id, {
            '$set': {
                certPath: newpath
            }
        }, { new: true, useFindAndModify: false }).then(() => {
            return true
        }).catch((err) => {
            return false
        })
    }

    if(type == 'produto') {
        var up =  Produto.findByIdAndUpdate(id, {
            '$set': {
                caPath: newpath
            }
        }, { new: true, useFindAndModify: false }).then(() => {
            return true
        }).catch((err) => {
            return false
        })
    }

    if (err) throw err

    return up

        })
    })
}

module.exports = uploadPhoto