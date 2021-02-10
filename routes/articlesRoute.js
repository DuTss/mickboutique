const router = require('express').Router()
const articlesController = require('../controllers/articlesController')

// PAGE DES ARTICLES
// GET
router.get('/', articlesController.getArticlesPage)

router.get('/:id', articlesController.getSingleArticlePage)

module.exports = router