const router = require('express').Router()
const auteursController = require('../controllers/auteursController')

// PAGE DES AUTEURS
// GET
router.get('/', auteursController.getAuteursPage) // URL est localhost:3000/liste-des-auteurs/

router.get('/auteur/:auteurId', auteursController.getAuteurSinglePage)  //URL est localhost:3000/liste-des-auteurs/auteur/1

module.exports = router