const e = require('express')
const {Router} = require('express')
const router = Router()
const hikvision = require('node-hikvision-api')

router.get('/event', (req, res)=> {
    
    const evento = req.body

    console.log(evento)

    res.send(evento)

})

module.exports = router