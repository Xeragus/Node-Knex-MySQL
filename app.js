const express = require('express')
const app = express()
const logger = require('morgan')
const parser = require('body-parser')

app.use(logger('dev'))

app.use(parser.urlencoded({
    extended: false
}))

app.get('/', (req, res) => {
    res.status(200).send({
        message: "Hey"
    })
})