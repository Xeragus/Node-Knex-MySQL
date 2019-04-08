require('dotenv').config()
const http = require('http')
const app = require('./app')
const server = http.createServer(app)

server.listen(process.env.PORT)

// let mysql = require('mysql')
// let connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'passport_guard'
// })

// connection.connect((err) => {
//     if(err) throw err
//     console.log('Connected!')
// })

// connection.query('SELECT 1 + 1 AS Solution', (error, results, fields) => {
//     if(error) {
//         throw error
//     }

//     console.log('The solution is:', results[0].solution)
// })

// connection.end((err) => {
//     if(err) throw err
//     console.log('Disconnected!')
// })

