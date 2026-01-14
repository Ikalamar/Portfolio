// Configuration du Portfolio
export const portfolioConfig = {
  // Informations personnelles
  personal: {
    name: 'Esteban Ringot',
    title: 'Developer & Designer',
    email: 'ringot.esteban@gmail.com',
    phone: '+33 7 81 55 74 63',
    location: 'Le Mans, France',
    bio: 'Développeur Full Stack et graphiste passionné par la création de solutions web modernes et époustouflantes.',
  },

  // Réseaux sociaux
  social: {
    linkedin: 'https://linkedin.com/in/esteban-ringot',
    github: 'https://github.com/esteban-ringot',
    twitter: 'https://twitter.com/estebanringot',
  },

  // Compétences
  skills: {
    development: [
      'HTML, CSS, JavaScript',
      'Angular, React',
      'Node.js, Express',
      'SQL Server, Databases',
      'Scrum, MVC Architecture',
    ],
    design: [
      'Adobe Photoshop',
      'Figma, Design Systems',
      'WordPress, Jahia CMS',
      'Bootstrap, Responsive Design',
      'Git, Version Control',
    ],
    softSkills: [
      'Communication',
      'Team Player',
      'Problem Solving',
      'Leadership',
      'Créativité',
    ],
  },

  // Couleurs personnalisées
  colors: {
    primary: '#80b67f',
    secondary: '#e3ffe2',
    accent: '#80b67f',
    highlight: '#80b67f',
    light: '#ffffff',
    dark: '#2a2a2a',
  },

  // Projets par défaut (à personnaliser)
  defaultProjects: {
    developer: [
      {
        id: 1,
        title: 'Accessibility Awareness Website',
        description: 'Site web de sensibilisation à l\'accessibilité numérique développé avec Jahia CMS',
        technologies: ['Jahia CMS', 'HTML', 'CSS', 'JavaScript'],
        featured: true,
      },
      {
        id: 2,
        title: 'Restaurant Management System',
        description: 'Site vitrine de restaurant avec gestion des menus et réservations',
        technologies: ['PHP', 'MVC', 'MySQL', 'Bootstrap'],
        featured: true,
      },
    ],
    designer: [
      {
        id: 1,
        title: 'Digital Factory MMA - Brand Identity',
        description: 'Création d\'une identité visuelle complète pour Digital Factory MMA',
        category: 'branding',
        tools: ['Photoshop', 'Illustrator', 'Figma'],
        featured: true,
      },
      {
        id: 2,
        title: 'E-Sports Line - Team Design',
        description: 'Design graphique et branding pour équipe d\'e-sports',
        category: 'branding',
        tools: ['Photoshop', 'Illustrator'],
        featured: true,
      },
    ],
  },

  // Textes et traductions
  i18n: {
    fr: {
      nav: {
        home: 'Accueil',
        developer: 'Développement',
        designer: 'Design',
        contact: 'Contact',
      },
      hero: {
        title: 'Esteban Ringot',
        subtitle: 'Developer & Designer',
      },
      sections: {
        skills: 'Mes Compétences',
        portfolio: 'Mon Portfolio',
        projects: 'Tous les Projets',
        featured: 'Projets Phares',
      },
    },
  },
};
