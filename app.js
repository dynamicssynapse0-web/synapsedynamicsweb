const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration du moteur de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuration des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Middleware pour traiter les données des formulaires
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route principale
app.get('/', (req, res) => {
    res.render('pages/home', {
        title: 'SynapseDynamics | Artificial Intelligence'
    });
});
// Page À propos
app.get('/about', (req, res) => {
    res.render('pages/about');
});
// Page Services
app.get('/services', (req, res) => {
    res.render('pages/services');
});

// Page Réalisations
app.get('/projects', (req, res) => {
    res.render('pages/projects');
});

// Page Contact
app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`SynapseDynamics est lancé sur http://localhost:${PORT}`);
});