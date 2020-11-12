const express = require('express')
const app = express()
const port = 8000
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs')
const Promise = require('bluebird')
const Property = require("../database/index.js")

app.use(express.static('dist'))
app.use(bodyParser.json())

app.get('/' , (req, res) => {
  Property.findAll((err, success) => {
    if (err) {
      console.log('errr')
    } else {
      res.send( success );
    }
  });

})






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})