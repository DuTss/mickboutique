const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const util = require('util');
const methodOverride = require('method-override');

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

// METHODE OVERRIDE
app.use(methodOverride('_method'))


// DECLARE LA VARIABLE GLOBALE QUERY SQL
global.querysql = util.promisify(db.query).bind(db)

// Middleware - BodyParser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// EJS
app.set('view engine', 'ejs');

// DOSSIER STATIC (PUBLIC)
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
const articles = require('./routes/articlesRoute')
const auteurs = require('./routes/auteursRoute')
const tableauDeBord = require('./routes/tableauDeBordRoute')

// CONTROLLER
app.use('/liste-des-articles', articles)
app.use('/liste-des-auteurs', auteurs)
app.use('/tableau-de-bord', tableauDeBord)

app.get('/', function (req, res) {
    res.send('Bonjour')
  })
   
app.listen(3000)