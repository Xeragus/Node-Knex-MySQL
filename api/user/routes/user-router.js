const express = require('express')
const router = express.Router()
// const UserCreateController = require('./controllers/user-create-controller')
// const StoreUserService = require('./services/store-user-service')
const store = require('./store')

router.post('/create', (req, res) => {
    store.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(() => res.sendStatus(200))
})

module.exports = router