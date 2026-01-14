# Portfolio Esteban Ringot

## 📋 Vue d'ensemble

Un template de portfolio professionnel et moderne conçu spécifiquement pour Esteban Ringot. Ce portfolio présente vos projets de développement web et vos créations graphiques dans une interface élégante et responsive.

## 🎨 Couleurs et Design

Le portfolio utilise une palette de couleurs moderne et professionnelle inspirée de votre CV :

- **Primaire Foncé** : `#1a1a2e` - Fond principal
- **Secondaire Foncé** : `#16213e` - Accent sombre
- **Bleu Accentué** : `#0f3460` - Couleur primaire
- **Rose Accentué** : `#e94560` - Highlight principal
- **Texte Clair** : `#f5f5f5` - Texte principal

## 📱 Pages et Composants

### 1. **Page d'Accueil** (`/`)
- **Hero Section** : Introduction avec gradient animé
- **Skills Section** : Présentation des compétences en 3 catégories
  - Développement (HTML, CSS, JavaScript, Angular, Node.js, SQL Server, etc.)
  - Design & Outils (Photoshop, Figma, WordPress, Bootstrap, Git)
  - Soft Skills (Communication, Team Player, Problem Solving, Leadership)
- **Portfolio Grid** : Deux grandes cases cliquables
  - "Projets Développeur" → `/developer`
  - "Projets Graphiste" → `/designer`
- **CTA Section** : Appel à l'action "Parlons de votre projet"

### 2. **Page Développement** (`/developer`)
- **Header Section** : Titre et description
- **Featured Projects** : Showcase des 2 meilleurs projets
  - Accessibility Awareness Website (Jahia CMS)
  - Restaurant Management System (PHP, MVC)
- **Projects Grid** : Grille filtrable de tous les projets
  - **Filtres disponibles** : Tous, Web, Full Stack, Frontend, Backend
  - **Projets inclus** :
    - E-Commerce Platform
    - Task Management App
    - Social Media Dashboard
    - Real Estate Portal
- **Carte de Projet** avec :
  - Image
  - Titre et description
  - Technologies utilisées
  - Lien vers le projet et code source

### 3. **Page Design** (`/designer`)
- **Header Section** : Titre et description
- **Featured Projects** : Showcase des 2 meilleurs projets
  - Digital Factory MMA - Brand Identity
  - E-Sports Line - Team Design
- **Galerie de Projets** : Grille avec filtres
  - **Catégories** : Tous, Branding, UI Design, Graphic, Illustration, Web Design
  - **8 projets** avec images et descriptions
- **Stats Section** : Statistiques
  - 50+ Projets Réalisés
  - 30+ Clients Satisfaits
  - 10+ Années d'Expérience
  - 100% Satisfaction Client
- **CTA Section** : "Besoin d'un design professionnel ?"

### 4. **Navigation (Header)**
- **Logo** : "ER" (initiales d'Esteban Ringot)
- **Menu** : Accueil, Développement, Design, Contact
- **Responsive** : Menu hamburger sur mobile

### 5. **Footer**
- **Sections** : Info, Navigation, Réseaux Sociaux
- **Copyright** : © 2025 Esteban Ringot
- **Mentions** : Accessibilité

## 🎯 Fonctionnalités

### Navigation
- ✅ Routes Angular configurées
- ✅ Liens de navigation internes (routerLink)
- ✅ Menu responsive avec hamburger

### Animations
- ✅ Gradients animés en hover
- ✅ Transitions fluides
- ✅ Effets de parallaxe
- ✅ Animations d'entrée des éléments

### Responsive Design
- ✅ Mobile-first approach
- ✅ Grilles flexibles
- ✅ Images adaptées
- ✅ Menu hamburger sur mobile
- ✅ Breakpoints : 768px et moins

### Interactivité
- ✅ Filtres de projets dynamiques
- ✅ Hover effects
- ✅ Overlays interactifs
- ✅ Boutons et appels à l'action

## 🚀 Installation et Démarrage

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm start

# Build pour la production
npm run build
```

## 📁 Structure des Fichiers

```
src/
├── app/
│   ├── home/
│   │   ├── home.ts
│   │   ├── home.html
│   │   └── home.css
│   ├── developer/
│   │   ├── developer.ts
│   │   ├── developer.html
│   │   └── developer.css
│   ├── designer/
│   │   ├── designer.ts
│   │   ├── designer.html
│   │   └── designer.css
│   ├── header/
│   │   ├── header.ts
│   │   ├── header.html
│   │   └── header.css
│   ├── footer/
│   │   ├── footer.ts
│   │   ├── footer.html
│   │   └── footer.css
│   ├── app.ts
│   ├── app.html
│   ├── app.css
│   └── app.routes.ts
├── styles.css
└── main.ts
```

## 🎨 Personnalisation

### Modifier les Couleurs
Éditer les variables CSS dans `src/styles.css` :
```css
:root {
  --primary-color: #1a1a2e;
  --highlight-color: #e94560;
  /* ... autres couleurs */
}
```

### Ajouter des Projets
1. Ouvrir `src/app/developer/developer.ts` ou `src/app/designer/designer.ts`
2. Ajouter un nouvel objet dans le tableau `projects`
3. Inclure : titre, description, technologies, image, featured

### Modifier les Compétences
Dans `src/app/home/home.html`, éditer la section **Skills**

### Ajouter des Liens Sociaux
Éditer `src/app/footer/footer.html` dans les social-links

## 📝 Contenu à Mettre à Jour

- [ ] Ajouter vos vraies images de projets
- [ ] Remplacer les projets d'exemple par vos véritables réalisations
- [ ] Mettre à jour les liens de contact
- [ ] Ajouter vos profils sociaux (LinkedIn, GitHub, etc.)
- [ ] Mettre à jour les informations de contact
- [ ] Ajouter des descriptions personnelles plus détaillées

## 🔧 Technologies Utilisées

- **Framework** : Angular 17+
- **Styling** : CSS3 (variables, gradients, flexbox, grid)
- **Animation** : CSS animations et transitions
- **Responsive** : Media queries
- **Structure** : Composants standalone Angular

## 📱 Breakpoints

- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

## ⚡ Performance

- ✅ Lazy loading des images
- ✅ CSS optimisé
- ✅ Animations GPU-accelerées
- ✅ Code modulaire et réutilisable

## 🎓 Compétences Présentes

D'après votre CV, le portfolio met en avant :

**Développement** :
- HTML, CSS, Bootstrap, Javascript
- PHP, MVC architecture, C#, JAVA, Node.Js
- SQL Server
- Scrum
- Wordpress, Google Site, Jahia

**Design & Outils** :
- Adobe Photoshop
- OBS Studio
- Microsoft Office

**Soft Skills** :
- Communication
- Friendly and approachable
- Committed
- Team player

## 🔒 Accessibilité

- ✅ Contraste suffisant des couleurs
- ✅ Textes alternatifs sur les images
- ✅ Navigation au clavier
- ✅ Structure HTML sémantique

## 📞 Contact

À personnaliser avec vos véritables coordonnées :
- Email : ringot.esteban@gmail.com
- Téléphone : +33 7 81 55 74 63
- Adresse : Le Mans, France

## 📄 Licence

© 2025 Esteban Ringot. Tous droits réservés.

---

**Note** : Ce portfolio est un template professionnel. Assurez-vous de personnaliser tout le contenu, les images et les liens selon vos besoins réels.
