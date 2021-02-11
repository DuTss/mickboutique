// GET AFFICHE LISTE DES AUTEURS
exports.getAuteursPage = async (req,res) => {
    const listeAuteurs = await querysql('SELECT * FROM auteur')
    res.render('auteurs', {auteurs: listeAuteurs})
}

// GET AFFICHE UN SEUL AUTEUR
exports.getAuteurSinglePage = async (req,res) => {
    const auteurIdUrl = req.params.auteurId
    const auteurSingle = await querysql("SELECT * FROM auteur WHERE auteurId = '" + auteurIdUrl + "'; ")
    res.render('auteurSingle', {auteur: auteurSingle[0]})
}