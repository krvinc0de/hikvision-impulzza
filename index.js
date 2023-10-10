const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))

app.listen(3000, () => {
    console.log('servidor en escucha')
})

app.use('/api', require('./src/router/eventsRouter'))