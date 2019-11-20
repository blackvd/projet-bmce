const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.POST | 5000

app.use(cors())
app.use(express.json())

mongoose.connect(
  'mongodb://localhost:27017/bmce',
  { useNewUrlParser: true, useCreateIndex: true },
  (err) => {
    if(!err) {
      console.log('MongoDB database connection established successfully')
    }
  }
)

const usersRouter = require('./routes/users')

app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`)
})
