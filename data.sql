-- CREER LA DATABASE
CREATE DATABASE mickboutique;
-- UTILISE LA DATABASE
USE mickboutique;

-- CREER LA TABLE AUTEUR
CREATE TABLE auteur (
	auteurId INT AUTO_INCREMENT,
    nom VARCHAR(255),
    PRIMARY KEY (auteurId)
);

-- CREER LA TABLE ARTICLE
CREATE TABLE article (
	articleId INT AUTO_INCREMENT,
    titre VARCHAR(50),
    image VARCHAR(255),
    auteurId INT,
    description VARCHAR(255),
    PRIMARY KEY (articleId),
    FOREIGN KEY (auteurId) REFERENCES auteur(auteurId)
);

-- AJOUTE UN AUTEUR
INSERT INTO auteur (nom) VALUES ('Vlad'),('Jeremy'),('Karl'),('Benjamin');

-- AFFICHE LA LISTE DES AUTEURS
SELECT * FROM auteur;

-- AJOUTE UN LIVRE
INSERT INTO article (titre,image,auteurId,description)
VALUES ('Neige en France', 'neige.jpeg', 4,'La neige est belle lol.');

-- AFFICHE LA LISTE DES ARTICLES
SELECT * FROM article;