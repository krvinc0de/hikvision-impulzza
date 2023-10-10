import express from 'express'
import morgan from 'morgan'
import eventRouter from './src/router/eventsRouter.js'
import connectDB from './src/configs/database.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.listen(3000, () => {
    try {
        connectDB()
        console.log('servidor en escucha')
    } catch (error) {
        
    }
})

app.use('/api', eventRouter)