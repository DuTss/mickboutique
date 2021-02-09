const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const util = require('util');

// DotEnv
require('dotenv').config()

// MYSQL
const db = mysql.createConnection({
  host:  process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

db.connect(
  (err) => {
    if (err) { throw err }
    console.log('Connecté au serveur MySQL');
  }
)

// DECLARE LA VARIABLE GLOBALE QUERY SQL
global.querysql = util.promisify(db.query).bind(db)


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