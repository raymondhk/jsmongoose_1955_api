const express = require('express')
const app = express()
require('./server/config/mongoose')
const routes_setter = require('./server/config/routes.js')
routes_setter(app)
app.listen(8000, () => {
    console.log('listening on Port 8000')
})