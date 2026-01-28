# Maquette Statique - Portfolio Esteban Ringot

## Description

Cette maquette est une version HTML/CSS/JS statique du portfolio Angular d'Esteban Ringot.

## Fichiers

- `index.html` - Structure HTML complète avec toutes les sections
- `styles.css` - Tous les styles CSS (variables, composants, responsive)
- `script.js` - JavaScript pour l'interactivité (navigation, filtres, animations)

## Fonctionnalités

### Navigation
- Menu de navigation avec liens vers les sections
- Menu hamburger responsive pour mobile
- Navigation fluide entre les sections
- Support du hash dans l'URL

### Sections
1. **Accueil (Home)**
   - Hero section avec présentation
   - Section compétences avec barres de progression animées
   - Portfolio cards (Développeur / Designer)
   - Call-to-action

2. **Développement (Developer)**
   - Header de page
   - Projets featured (2 premiers projets)
   - Tous les projets avec filtres (all, web, full-stack, frontend, backend)
   - Call-to-action

3. **Design (Designer)**
   - Header de page
   - Projets featured (2 premiers projets)
   - Galerie de projets avec filtres (all, branding, web-design, illustration, ui-ux)
   - Section statistiques
   - Call-to-action

4. **Contact**
   - Informations de contact
   - Formulaire de contact fonctionnel
   - Liens vers les réseaux sociaux

### Interactivité
- Menu hamburger pour mobile
- Filtres de projets dynamiques
- Animation des barres de compétences au scroll
- Animations au hover sur les cartes
- Formulaire de contact avec validation

## Responsive Design

Le site est entièrement responsive avec des breakpoints à :
- Desktop : > 768px
- Tablet : 481px - 768px
- Mobile : ≤ 480px

## Comment utiliser

1. Ouvrir `index.html` dans un navigateur web
2. Aucune installation ou serveur nécessaire
3. Tout fonctionne en local

## Notes

- Les images sont représentées par des placeholders (à remplacer par de vraies images)
- Le formulaire de contact affiche un alert (à connecter à un backend pour envoi réel)
- Les projets sont définis dans `script.js` et peuvent être modifiés facilement

## Personnalisation

### Modifier les couleurs
Dans `styles.css`, modifier les variables CSS dans `:root` :
```css
--primary-green: #80b67f;
--accent-green-dark: #5a8a5c;
--bg-primary: #0a0a0a;
```

### Ajouter des projets
Dans `script.js`, ajouter des objets dans les tableaux `developerProjects` ou `designerProjects`.

### Modifier le contenu
Directement dans `index.html`, modifier les textes et descriptions.

## Technologies utilisées

- HTML5
- CSS3 (Flexbox, Grid, Variables CSS, Animations)
- JavaScript Vanilla (ES6+)
- Design responsive mobile-first

## Compatibilité

Compatible avec tous les navigateurs modernes :
- Chrome / Edge (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Opera (dernières versions)
