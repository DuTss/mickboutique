// AFFICHER LA LISTE DES ARTICLES
exports.getArticlesAdmin = async (req,res) => {
    const articlesTotal = await querysql('SELECT COUNT(*) AS total FROM article')
    const articlesAdmin = await querysql('SELECT article.titre, article.image, article.description, auteur.nom FROM article INNER JOIN auteur ON article.auteurId = auteur.auteurId')
    console.log(articlesAdmin);
    res.render('admin/articlesAdmin', {articles: articlesAdmin, total: articlesTotal[0].total})
}

// AFFICHE LE FORMULAIRE D'UN ARTICLE
exports.getAddArticleAdmin = async (req,res) => {
    const listeDesAuteurs = await querysql('SELECT * FROM auteur')
    res.render('admin/ajouterArticle', {auteurs: listeDesAuteurs})
}

// AJOUTER UN ARTICLE
exports.postAddArticleAdmin = async (req,res) => {
    const imageURL = "https://www.hampshire.police.uk/SysSiteAssets/media/images/hampshire/hc-web-2018-news-1-sml-card.jpg.jpg"
    const { titre,description,auteurId } = req.body
    
    // GESTION DES EXECPTIONS
    try {
        await querysql(
            "INSERT INTO article (titre,description,auteurId,image) VALUES ('" + titre + "','" + description + "', '" + auteurId + "', '" + imageURL + "');", 
        (err,result) => {
            if(err) {
                res.send(err)
            } else {
                return res.redirect('/tableau-de-bord/liste-des-articles')
            }
        }
        )
        
    } catch(err) {
        res.status(400).json({message: err})
    }
}