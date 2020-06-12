const express = require('express')
const server = express()
const port = process.env.PORT || 8050
// const morgan = require('morgan')
const router = require('./router/router')


server.use(express.json())
// server.use(morgan('dev'))

server.use(express.urlencoded({ extended: true }))
server.use('/api/posts', router)

server.listen(port, () => console.log('Sever Running on Port 8050'))
