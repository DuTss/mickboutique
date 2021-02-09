const express = require('express');
const app = express();

// CONTROLLER
app.get('/', function (req, res) {
    res.send('Bonjour')
  })
   
app.listen(3000)