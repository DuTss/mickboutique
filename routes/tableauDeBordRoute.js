const router = require('express').Router()
const tableauDeBordController = require('../controllers/tableauDeBordController')

// PAGE TABLEAU DE BORD
router.get('/', tableauDeBordController.getTableauDeBordPage)


module.exports = router