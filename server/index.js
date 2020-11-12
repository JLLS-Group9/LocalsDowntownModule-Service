const express = require('express')
const app = express()
const port = 8000
const path = require('path');
const bodyParser = require('body-parser')


app.use('/', (err,success) => {
  if (err) {
    console.log('errror')
  } else {
    console.log('success')
  }
})
app.use(express.static('dist'))
app.use(bodyParser.json())





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})