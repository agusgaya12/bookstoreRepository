const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
const addBook = require('./routes/book/addBook')
const getBook = require('./routes/book/getBook')
const getStores = require('./routes/stores/getStores')
const addStores = require('./routes/stores/addStores')

const app = express()
app.use(bodyParser.json())

app.use(rootRoute)
app.use(addBook)
app.use(getBook)
app.use(getStores)
app.use(addStores)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
