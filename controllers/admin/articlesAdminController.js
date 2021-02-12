exports.getArticlesAdmin = async (req,res) => {
    const articlesTotal = await querysql('SELECT COUNT(*) AS total FROM article')
    const articlesAdmin = await querysql('SELECT article.titre, article.image, article.description, auteur.nom FROM article INNER JOIN auteur ON article.articleId = auteur.auteurId')
    res.render('admin/articlesAdmin', {articles: articlesAdmin, total: articlesTotal[0].total})
}

// AFFICHE LE FORMULAIRE D'UN ARTICLE
exports.getAddArticleAdmin = async (req,res) => {
    res.render('admin/ajouterArticle')
}

// AJOUTER UN ARTICLE
exports.postAddArticleAdmin = async (req,res) => {

}