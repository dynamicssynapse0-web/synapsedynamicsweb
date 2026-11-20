const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const BASE_URL = process.env.BASE_URL || 'https://synapsedynamicsweb.vercel.app';

app.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'SynapseDynamics — Intelligence artificielle et innovation',
    description: "SynapseDynamics conçoit des solutions d'intelligence artificielle, développe des technologies innovantes et explore les nouvelles frontières de l'IA.",
    url: BASE_URL + '/',
    page: 'home',
  });
});

app.get('/about', (req, res) => {
  res.render('pages/about', {
    title: 'À propos — SynapseDynamics',
    description: "Découvrez SynapseDynamics : notre mission, notre vision et l'équipe qui construit les solutions d'IA de demain.",
    url: BASE_URL + '/about',
    page: 'about',
  });
});

app.get('/services', (req, res) => {
  res.render('pages/services', {
    title: 'Services — SynapseDynamics',
    description: "Nos services : conseil en IA, développement de solutions intelligentes, recherche appliquée et innovation technologique.",
    url: BASE_URL + '/services',
    page: 'services',
  });
});

app.get('/projects', (req, res) => {
  res.render('pages/projects', {
    title: 'Réalisations — SynapseDynamics',
    description: "Découvrez nos projets récents en intelligence artificielle, machine learning et transformation digitale.",
    url: BASE_URL + '/projects',
    page: 'projects',
  });
});

app.get('/contact', (req, res) => {
  res.render('pages/contact', {
    title: 'Contact — SynapseDynamics',
    description: "Contactez SynapseDynamics pour discuter de votre projet en intelligence artificielle et innovation technologique.",
    url: BASE_URL + '/contact',
    page: 'contact',
  });
});

app.listen(PORT, () => {
  console.log(`SynapseDynamics est lancé sur http://localhost:${PORT}`);
});