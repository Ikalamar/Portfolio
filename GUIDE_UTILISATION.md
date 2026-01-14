# Guide d'Utilisation - Portfolio Esteban Ringot

## 🚀 Démarrage Rapide

### Installation
```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm start

# Accéder à http://localhost:4200
```

## 📝 Personnalisation du Contenu

### 1. Mettre à jour les Informations Personnelles

**Fichier** : `src/app/config.ts`

```typescript
personal: {
  name: 'Votre Nom',
  title: 'Votre Titre',
  email: 'votre.email@example.com',
  phone: '+33 X XX XX XX XX',
  location: 'Votre Ville',
  bio: 'Votre bio personnalisée',
}
```

### 2. Ajouter vos Projets Développeur

**Fichier** : `src/app/developer/developer.ts`

```typescript
loadProjects() {
  this.projects = [
    {
      id: 1,
      title: 'Nom de votre projet',
      description: 'Description détaillée',
      image: 'assets/project-1.jpg', // Ajouter votre image
      technologies: ['Tech1', 'Tech2'],
      link: 'https://votre-site.com', // Optionnel
      github: 'https://github.com/...', // Optionnel
      featured: true, // Afficher en avant
    },
    // Ajouter d'autres projets...
  ];
}
```

### 3. Ajouter vos Projets Design

**Fichier** : `src/app/designer/designer.ts`

```typescript
loadProjects() {
  this.projects = [
    {
      id: 1,
      title: 'Nom de votre projet design',
      description: 'Description',
      image: 'assets/design-1.jpg',
      category: 'branding', // branding, ui-design, graphic, illustration, web-design
      tools: ['Photoshop', 'Figma'],
      featured: true,
    },
    // Ajouter d'autres projets...
  ];
}
```

### 4. Modifier les Compétences

**Fichier** : `src/app/home/home.html`

Localiser la section **Skills** et modifier les listes :

```html
<div class="skill-category">
  <h3>Votre Catégorie</h3>
  <ul class="skill-list">
    <li>Compétence 1</li>
    <li>Compétence 2</li>
    <!-- Ajouter vos compétences -->
  </ul>
</div>
```

### 5. Ajouter des Réseaux Sociaux

**Fichier** : `src/app/footer/footer.html`

```html
<div class="social-links">
  <a href="https://linkedin.com/..." target="_blank" class="social-link">LinkedIn</a>
  <a href="https://github.com/..." target="_blank" class="social-link">GitHub</a>
  <a href="https://twitter.com/..." target="_blank" class="social-link">Twitter</a>
  <!-- Ajouter d'autres réseaux -->
</div>
```

## 🎨 Personnaliser les Couleurs

**Fichier** : `src/styles.css`

```css
:root {
  --primary-color: #1a1a2e;      /* Couleur primaire */
  --secondary-color: #16213e;    /* Couleur secondaire */
  --accent-color: #0f3460;       /* Couleur accent */
  --highlight-color: #e94560;    /* Couleur highlight */
  --light-text: #f5f5f5;         /* Texte clair */
  --dark-text: #1a1a2e;          /* Texte foncé */
}
```

## 🖼️ Ajouter des Images

1. Placer vos images dans `src/assets/`
2. Référencer dans les composants :

```html
<img src="assets/ma-photo.jpg" alt="Description" />
```

## 📱 Points d'Arrêt Responsive

- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

Les styles responsive sont déjà inclus dans les fichiers `.css`.

## 🔗 Configurer les Liens Internes

Utiliser `routerLink` pour la navigation :

```html
<!-- Navigation vers l'accueil -->
<a routerLink="/">Accueil</a>

<!-- Navigation vers les projets développeur -->
<a routerLink="/developer">Développement</a>

<!-- Navigation vers les projets design -->
<a routerLink="/designer">Design</a>
```

## 📝 Modifier le Texte du Hero

**Fichier** : `src/app/home/home.html`

```html
<h1 class="hero-title">Votre Nom</h1>
<p class="hero-subtitle">Votre Titre</p>
<p class="hero-description">
  Votre bio courte et engageante
</p>
```

## 🎯 Filtrer les Projets par Catégorie

Les projets développeur utilisent des catégories techniques :
- `web` - Projets web
- `full-stack` - Applications complètes
- `frontend` - Interface utilisateur
- `backend` - Services serveur

Les projets design utilisent des catégories créatives :
- `branding` - Identité visuelle
- `ui-design` - Design d'interface
- `graphic` - Graphisme général
- `illustration` - Illustrations
- `web-design` - Design web

## 💫 Ajouter des Animations Personnalisées

Ajouter des classes aux éléments :

```html
<!-- Animation de montée -->
<div class="animate-fadeInUp">Contenu</div>

<!-- Animation de glisse gauche -->
<div class="animate-slideInLeft">Contenu</div>

<!-- Animation de glisse droite -->
<div class="animate-slideInRight">Contenu</div>
```

## 🔧 Variables CSS Utiles

```css
/* Couleurs */
var(--primary-color)
var(--highlight-color)
var(--accent-color)

/* Espacement */
var(--border-radius)

/* Transitions */
var(--transition)

/* Ombres */
var(--shadow)
```

## 📦 Structure des Composants

### Composant Home
- Hero section
- Skills section
- Portfolio grid (2 grandes cases)
- CTA section

### Composant Developer
- Page header
- Featured projects
- Projects grid avec filtres
- CTA section

### Composant Designer
- Page header
- Featured projects
- Gallery avec filtres
- Stats section
- CTA section

## 🎓 Exemple Complet : Ajouter un Projet

### Étape 1 : Ajouter l'image
Placer votre image dans `src/assets/project-7.jpg`

### Étape 2 : Ajouter le projet
Dans `src/app/developer/developer.ts` :

```typescript
{
  id: 7,
  title: 'Mon Nouveau Projet',
  description: 'Description de ce projet incroyable',
  image: 'assets/project-7.jpg',
  technologies: ['Angular', 'Node.js', 'MongoDB'],
  link: 'https://monprojet.com',
  github: 'https://github.com/monprojet',
  featured: false,
}
```

### Étape 3 : Tester
Le nouveau projet apparaît automatiquement dans la grille !

## 🐛 Dépannage

### La page ne se charge pas
- Vérifier que `npm start` est exécuté
- Vérifier la console du navigateur pour les erreurs
- Actualiser la page (Ctrl+F5)

### Les images ne s'affichent pas
- Vérifier le chemin de l'image
- L'image doit être dans `src/assets/`
- Vérifier l'attribut `alt` pour l'accessibilité

### Les styles ne s'appliquent pas
- Vérifier les variables CSS dans `styles.css`
- Actualiser le navigateur
- Vérifier la console pour les avertissements CSS

## 📱 Tester le Responsive

### Navigateur
1. Ouvrir Chrome DevTools (F12)
2. Cliquer sur le bouton "Responsive Design Mode" (Ctrl+Shift+M)
3. Tester différentes résolutions

## 🚀 Déploiement

### Build pour la production
```bash
npm run build
```

Les fichiers générés seront dans `dist/`.

### Déployer sur Vercel
1. Installer Vercel CLI : `npm install -g vercel`
2. Exécuter : `vercel`
3. Suivre les instructions

## ✅ Checklist de Personnalisation

- [ ] Mettre à jour le nom et titre
- [ ] Ajouter une photo de profil
- [ ] Mettre à jour les compétences
- [ ] Ajouter vos projets développeur
- [ ] Ajouter vos projets design
- [ ] Configurer les liens sociaux
- [ ] Modifier la bio et description
- [ ] Tester sur mobile
- [ ] Vérifier tous les liens
- [ ] Tester les filtres de projets

## 📞 Support et Questions

Pour toute question ou problème, consultez :
- Les commentaires dans le code
- La documentation Angular
- Les fichiers CSS pour comprendre les styles

---

**Bon courage dans la personnalisation de votre portfolio ! 🎉**
