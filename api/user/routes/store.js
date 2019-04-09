const knex = require('knex')(require('../../../knexfile'))

module.exports = {
    create ({ username, password, name }) {
      return knex('users').insert({
        username: username,
        password: password,
        name: name
      })
    }
}