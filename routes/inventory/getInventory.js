const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/inventory', (req, res) => {
    res.send(db.get('inventories'))
})

module.exports = app