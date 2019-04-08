const express = require('express')
const app = express()
const logger = require('morgan')
const parser = require('body-parser')
const userRoutes = require('./api/user/routes/user-router')

app.use(logger('dev'))

// request body parser
app.use(parser.urlencoded({
    extended: false
})).use(parser.json())

// CORS handler
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
        .header('Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization')

    if (request.method === 'OPTIONS') {
        response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')

        return response.status(200).json({})
    }

    next()
})

app.use('/user', userRoutes)

module.exports = app