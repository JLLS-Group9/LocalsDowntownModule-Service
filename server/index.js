const express = require('express')
const app = express()
const port = 8000
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs')
const Promise = require('bluebird')
const Property = require("../db/models/property.js")


app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/homes/:id', (req, res) => {
  Property.findOne((req.params.id), (err,data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(JSON.stringify(data,0,2))
    }
  })
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})