const router = require('express').Router()
const tableauDeBordController = require('../controllers/admin/tableauDeBordController')
const articlesAdminController = require('../controllers/admin/articlesAdminController');

// PAGE TABLEAU DE BORD
router.get('/', tableauDeBordController.getTableauDeBordPage)

//--------------------------------------------- Pages des articles ------------------------------------------------------
// AFFICHE DES ARTICLES
router.get('/liste-des-articles', articlesAdminController.getArticlesAdmin)

// AFFICHE LE FORMULAIRE D'UN ARTICLE
router.get('/liste-des-articles/ajouter', articlesAdminController.getAddArticleAdmin)

// AJOUTER UN ARTICLE
router.post('/liste-des-articles/ajouter', articlesAdminController.postAddArticleAdmin)

// AFFICHE PAGE EDITER
router.get('/liste-des-articles/edit/:id', articlesAdminController.getEditArticleAdmin)

// EDITER UN ARTICLE
router.put('/liste-des-articles/edit/:id', articlesAdminController.putEditArticleAdmin)


module.exports = router