const router = require('express').Router()
const tableauDeBordController = require('../controllers/admin/tableauDeBordController')
const articlesAdminController = require('../controllers/admin/articlesAdminController');

// PAGE TABLEAU DE BORD
router.get('/', tableauDeBordController.getTableauDeBordPage)

// LISTE DES ARTICLES
router.get('/liste-des-articles', articlesAdminController.getArticlesAdmin)

module.exports = router