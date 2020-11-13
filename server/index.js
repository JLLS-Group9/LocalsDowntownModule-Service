const express = require('express')
const app = express()
const port = 8000
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs')
const Promise = require('bluebird')
const Property = require("../database/index.js")

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/api/prop7/reviews/all' , (req, res) => {
  var random = Math.floor(Math.random()*100);
  Property.findOne(7, (err, success) => {
    if (err) {
      console.log('err')
    } else {
      console.log(JSON.stringify(success))
      res.send(success)
    }
  })

})






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})