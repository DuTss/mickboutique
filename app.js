const express = require('express');
const path = require('path');
const app = express();

// EJS
app.set('view engine', 'ejs');

// DOSSIER STATIC (PUBLIC)
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
const articles = require('./routes/articlesRoute')

// CONTROLLER
app.use('/liste-des-articles', articles)

app.get('/', function (req, res) {
    res.send('Bonjour')
  })
   
app.listen(3000)