const express = require('express')
const app = express()
const port = 8000
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs')
const Promise = require('bluebird')
const Property = require("../models/property.js")


// app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/homes/:id', (req, res) => {
  console.log('req.params', req.params);
  console.log(typeof req.params.id)
  Property.findOne((req.params.id), (err,data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

Property.findOne(5, (err,data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})