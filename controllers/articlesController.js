// GET AFFICHE LA LISTE DES ARTICLES
exports.getArticlesPage = async (req,res) => {
    const listeDesArticles = await querysql('SELECT * FROM article')
    /*console.log('articles :', listeDesArticles);*/
    res.render('articles', {articles: listeDesArticles})
}