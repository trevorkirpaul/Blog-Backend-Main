const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/routes')
const config = require('./config')

const { user, password } = config
const app = express()
const port = 3001

mongoose.connect(
  `mongodb://${user}:${password}@ds151180.mlab.com:51180/blog`
)


app.use(cors())
app.use(bodyParser.json())

routes(app)

app.listen(port, () => console.log(`Parent API running on ${port}`))